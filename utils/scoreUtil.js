// scoreUtil.js
module.exports = {
  calculateScores(questions, userAnswers) {
    let totalScore = 0;
    const questionScores = {};
    
    questions.forEach(question => {
      let questionScore = 0;
  
      question.blanks.forEach(blank => {
        const userAnswer = userAnswers.fill[blank.blankId] || '';
        const standardAnswer = blank.standardAnswer || '';
		 // 严格比对，包括文字和标点									   
        if (userAnswer.trim() === standardAnswer.trim()) {
          questionScore += blank.score;
        }
      });
      
      questionScores[question.id] = Math.round(questionScore);
      totalScore += Math.round(questionScore);
    });
    
    return { totalScore, questionScores };
  },
  
 // 精确对比每个字符，返回差异数组
  compareAnswers(userAnswer, standardAnswer) {
    if (!userAnswer || !standardAnswer) {
      return [{ text: userAnswer || '', correct: false }];
    }
    
    const result = [];
    const maxLength = Math.max(userAnswer.length, standardAnswer.length);
    
    for (let i = 0; i < maxLength; i++) {
      const userChar = userAnswer.charAt(i);
      const standardChar = standardAnswer.charAt(i);
      
      // 如果用户答案较短，补充空字符进行比较
      if (i >= userAnswer.length) {
        result.push({ text: ' ', correct: false });
      } 
      // 如果标准答案较短，标记多余字符为错误
      else if (i >= standardAnswer.length) {
        result.push({ text: userChar, correct: false });
      } 
      // 正常字符比较
      else {
        result.push({ text: userChar, correct: userChar === standardChar });
      }
    }
    
    return result;
  }
};