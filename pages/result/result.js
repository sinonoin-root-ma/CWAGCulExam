// pages/result/result.js
const app = getApp();
const scoreUtil = require('../../utils/scoreUtil.js'); // 保留工具类

Page({
  data: {
    totalScore: 0,
    maxScore: 100,
    questions: [],    
    questionScores: {},
    answerResults: {} // 存储每空的对比结果（关键）
  },

  onLoad(options) {
    const globalData = app.globalData;
    this.setData({
      totalScore: globalData.totalScore || 0,
      maxScore: globalData.maxScore || 100,
      questions: globalData.questions || [],
      questionScores: globalData.questionScores || {}
    });
    // 确保数据完全赋值后执行计算
    this.calculateAllAnswerResults();
  },

  // 修复1：兼容blankId类型（数字/字符串互转）
  getUserAnswer(blankId) {
    const userFillAnswers = app.globalData.userAnswers.fill || {};
    // 关键：同时匹配数字和字符串类型的blankId  || userFillAnswers[String(blankId)] || userFillAnswers[Number(blankId)] 
    const answer = userFillAnswers[blankId] || '';
    //OK console.log(`【getUserAnswer】blankId=${blankId} | 答案=${answer}`);
    return answer;
  },

  // 【核心修复】修改遍历路径为 questions[].blanks
  getStandardAnswer(blankId) {
    const questions = this.data.questions;
    // 统一转字符串避免类型匹配问题
    const targetBlankId = String(blankId);
    // 遍历所有题目 → 题目下的blanks数组
    for (let q of questions) {
      // 校验blanks是否为有效数组
      if (!q.blanks || !Array.isArray(q.blanks)) continue;
      for (let blank of q.blanks) {
        // 匹配blankId（统一转字符串对比）
        if (String(blank.blankId) === targetBlankId) {
          const standardAns = blank.standardAnswer || '';
          //OK console.log(`【getStandardAnswer】找到匹配：blankId=${blankId} | 标准答案=${standardAns}`);
          return standardAns;
        }
      }
    }
    //console.log(`【getStandardAnswer】未找到blankId=${blankId}的标准答案`);
    return '';
  },

  // 【核心改造】逐字符严格对比（文字+标点），错误字符标红，一个错误则整体错误
  getAnswerDiffs(blankId) {
    const userAnswer = String(this.getUserAnswer(blankId) || ''); 
    const standardAnswer = String(this.getStandardAnswer(blankId) || ''); 
    // console.log(`【getAnswerDiffs】blankId=${blankId} | 用户答案=${userAnswer} | 标准答案=${standardAnswer}`);

    // 未作答兜底
    if (!userAnswer) {
      return [{ text: '未作答', correct: false }];
    }

    const diffs = [];
    // 取最大长度，处理「用户答案更长/更短」的情况（均算错误）
    const maxLen = Math.max(userAnswer.length, standardAnswer.length);

    // 逐字符严格比对（文字+标点全匹配）
    for (let i = 0; i < maxLen; i++) {
      const userChar = userAnswer[i] || ''; // 超出长度则为空字符
      const standardChar = standardAnswer[i] || ''; // 超出长度则为空字符
      const isCorrect = userChar === standardChar; // 严格全等对比
      diffs.push({
        text: userChar,
        correct: isCorrect
      });
    }
    return diffs;
  },

  // 修复4：确保遍历所有blank片段，无遗漏
  calculateAllAnswerResults() {
    const { questions } = this.data;
    const answerResults = {};

    if (!questions.length) {
      console.error('【calculateAllAnswerResults】题库为空！');
      this.setData({ answerResults });
      return;
    }

    // 遍历所有题目→所有片段→所有空
    questions.forEach((q) => {
      if (!q.titleFragments) return;
      q.titleFragments.forEach((frag) => {
        if (frag.type !== 'blank' || !frag.blankId) return;

        const blankId = frag.blankId;
        // 计算当前空的对比结果
        const diffs = this.getAnswerDiffs(blankId);
        answerResults[blankId] = {
          standardAnswer: this.getStandardAnswer(blankId),
          userAnswer: this.getUserAnswer(blankId),
          diffs: diffs,
          isCorrect: diffs.every(d => d.correct)
        };
      });
    });

    // 存入data供WXML渲染
    this.setData({ answerResults });
    console.log('【最终对比结果】', answerResults);
  },

  restartQuiz() {
    wx.redirectTo({ url: '/pages/quiz/quiz' });
  }
});