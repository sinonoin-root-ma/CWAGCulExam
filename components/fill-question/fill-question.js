const questionBank = require('../../utils/qslib');

Component({
  properties: {
    // 题目信息：index(序号)、content(题干)、blankId(填空ID)
    question: {
      type: Object,
      value: {}
    },
    questionNum: {
      type: Number,
      value: 0
    },
    userAnswers: {
      type: Object,
      value: {}
    }
  },
  data: {
    isLongAnswer: false,
    maxLength: 30
  },
 
  observers: {
    'question.id': function(questionId) {
      // 监听题目ID，判断是否为长答案   
      const isLongAnswer = questionBank.isLongAnswer(questionId);   
      const maxLength = questionBank.getMaxLength(questionId);        
      this.setData({ isLongAnswer, maxLength });  
      //console.log('fill-question 组件渲染中,question数据:',this.data)  
    }
  },
  methods: {
    getFirstTitleFragment() {
      console.log('getFirstTitleFragment 被调用'); // 新增日志
      //console.log('fill-question 组件渲染中,question数据:',this.data.question)
      // 从当前题目数据中提取 titleFragments
      const { titleFragments } = this.data.question;
      // 校验数据合法性，并兜底显示   
      if (!titleFragments || !Array.isArray(titleFragments) || titleFragments.length === 0) {
        console.log('getFirstTitleFragment()：题目')
        return '题目';  
       }
      // 查找第一个 type 为 text 的片段
      const firstTextFragment = titleFragments.find(item => item.type === 'text');
      console.log('getFirstTitleFragment()', firstTextFragment);
      return firstTextFragment ? firstTextFragment.content : '题目';
    },
    // 处理输入框输入，同步答案到父组件
    handleInput(e) {
      const blankId = e.currentTarget.dataset.blankId;
      const value = e.detail.value;
      this.triggerEvent('inputChange', { blankId, value });
    }
  }
});