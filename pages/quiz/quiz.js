// pages/quiz/quiz.js
const app = getApp();
const questionBank = require('../../utils/qslib');
const scoreUtil = require('../../utils/scoreUtil');

Page({
  data: {
    questions: [],
    userAnswers: {
      fill: {},
      choice: {},
      essay: {}
    },
    showSubmitBtn: false,  // 交卷按钮显示状态
    isScrollToBottom: false  // 标记是否已滚动到底部
  },
  
  onLoad() {
    const questions = questionBank.getQuestions();
    const globalAnswers = app.globalData.userAnswers || { fill: {}, choice: {}, essay: {} };
    // OK console.log('获取到的题目数据：', questions);
    this.setData({
      questions,
      userAnswers: globalAnswers
    });

    // 页面加载完成后，延迟100ms计算滚动高度（避免DOM未渲染完成）
    setTimeout(() => {
      this.checkScrollPosition();
    }, 100);
  },
  
  // 处理填空题输入
  handleFillInput(e) {
    const { blankId, value } = e.detail;
    const { userAnswers } = this.data;
    
    userAnswers.fill[blankId] = value;
    this.setData({ userAnswers });
    app.globalData.userAnswers = userAnswers;
  },
  
  // 滚动监听（实时判断）
  onScroll(e) {
    const scrollTop = e.detail.scrollTop;
    const scrollHeight = e.detail.scrollHeight;
    const windowHeight = e.detail.windowHeight;

    // 放宽判断条件：距离底部200rpx以内就显示（解决计算偏差）
    const isNearBottom = scrollTop + windowHeight >= scrollHeight - 200;
    
    // 只有状态变化时才更新（避免频繁setData）
    if (isNearBottom !== this.data.showSubmitBtn) {
      this.setData({ showSubmitBtn: isNearBottom });
    }
  },
  
  // 滚动到底部事件（精准触发，优先级最高）
  onScrollToLower() {
    this.setData({ 
      showSubmitBtn: true,
      isScrollToBottom: true  // 标记已到底部
    });
  },
  
  // 主动检查滚动位置（页面加载后调用）
  checkScrollPosition() {
    const query = wx.createSelectorQuery().in(this);
    query.select('.quiz-scroll').boundingClientRect(rect => {
      const scrollTop = rect.scrollTop;
      const scrollHeight = rect.scrollHeight;
      const windowHeight = rect.height;

      // 初始加载时如果已经在底部（如题目较少），直接显示按钮
      if (scrollTop + windowHeight >= scrollHeight - 200) {
        this.setData({ showSubmitBtn: true });
      }
    }).exec();
  },
  
  // 交卷评分
  submitQuiz() {
    const { questions, userAnswers } = this.data;
    const { totalScore, questionScores } = scoreUtil.calculateScores(questions, userAnswers);
    
    app.globalData.totalScore = totalScore;
    app.globalData.questionScores = questionScores;
    app.globalData.userAnswers = userAnswers;
    app.globalData.questions = questions;
    
    wx.navigateTo({
      url: '/pages/result/result'
    });
  }
});