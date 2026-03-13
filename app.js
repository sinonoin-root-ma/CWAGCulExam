// app.js
App({
  onLaunch() {
    // 初始化全局数据，支持多题型答案存储
    this.globalData = {
      userAnswers: {
        fill: {},    // 填空题答案：{blankId: 答案}
        choice: {},  // 选择题答案：{questionId: 选项ID}
        essay: {}    // 简答题答案：{questionId: 答案}
      },
      totalScore: 0,    // 总分
      questionScores: {}, // 每题得分：{questionId: 得分}
      questions: null   // 缓存题库
    };
  },
  globalData: {}
});
