// pages/index/index.js
Page({
  // 点击开始答题，跳转到答题页面
  startQuiz() {
    wx.navigateTo({
      url: '/pages/quiz/quiz'
    });
  }
});