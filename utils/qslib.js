// 题目数据（管理员可在此自定义题目、空数、分值、标准答案）
const questionBank = {
  questions: [
    {
      id: 1,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '企业宗旨——“两谋”原则' }, 
		    //{ type: 'text', content: '\n' },
        { type: 'blank', blankId: 101 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 102 }
      ],
      blanks: [
        { blankId: 101, score: 2, userAnswer: '', standardAnswer: '为企业谋发展' },
        { blankId: 102, score: 2, userAnswer: '', standardAnswer: '为员工谋利益' }
      ],
      questionMaxScore: 4,
      isLongAnswer: false	
    },
    {
      id: 2,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '工作方针——“五个统一”方针' }, 
		    //{ type: 'text', content: '\n' },
        { type: 'blank', blankId: 201 }, 
        { type: 'blank', blankId: 202 }, 
        { type: 'blank', blankId: 203 },
        { type: 'blank', blankId: 204 },
        { type: 'blank', blankId: 205 }
      ],
      blanks: [
        { blankId: 201, score: 2, userAnswer: '', standardAnswer: '做大与做强的统一' },
        { blankId: 202, score: 2, userAnswer: '', standardAnswer: '安全、服务、效益的统一' },
        { blankId: 203, score: 2, userAnswer: '', standardAnswer: '加强管理与转换机制、企业文化建设、思想政治工作的统一' },
        { blankId: 204, score: 2, userAnswer: '', standardAnswer: '内部资源与社会资源的统一' },
        { blankId: 205, score: 2, userAnswer: '', standardAnswer: '提高员工素质与提升企业品质的统一' }
      ],
      questionMaxScore: 10,
      isLongAnswer: false	
    },
    {
      id: 3,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '工作思路' },
        //{ type: 'text', content: '\n' },   
        { type: 'blank', blankId: 301 },
        { type: 'text', content: ',' },
        { type: 'blank', blankId: 302 },
        { type: 'text', content: ',' },
        { type: 'blank', blankId: 303 },
        { type: 'text', content: ',' },
        { type: 'blank', blankId: 304 },
        { type: 'text', content: ',' },
        { type: 'blank', blankId: 305 },
        { type: 'text', content: ',' },
        { type: 'blank', blankId: 306 },
        { type: 'text', content: '。' }        
      ],
      blanks: [
        { blankId: 301, score: 1, userAnswer: '', standardAnswer: '以改革创新为动力' },
        { blankId: 302, score: 1, userAnswer: '', standardAnswer: '以航空市场为主战场' },
        { blankId: 303, score: 1, userAnswer: '', standardAnswer: '以安全服务为两翼' },
        { blankId: 304, score: 1, userAnswer: '', standardAnswer: '以效益为中心' },
        { blankId: 305, score: 1, userAnswer: '', standardAnswer: '以企业文化为支撑' },
        { blankId: 306, score: 1, userAnswer: '', standardAnswer: '促进集团又好又快发展' }
      ],
      questionMaxScore: 6,
      isLongAnswer: false	
    },
    {
      id: 4,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '管理标准' },
        //{ type: 'text', content: '\n' },   
        { type: 'blank', blankId: 401 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 402 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 403 }
      ],
      blanks: [
        { blankId: 401, score: 1, userAnswer: '', standardAnswer: '与现代企业制度接轨' },
        { blankId: 402, score: 1, userAnswer: '', standardAnswer: '与市场接轨' },
        { blankId: 403, score: 1, userAnswer: '', standardAnswer: '与国际标准接轨' }
      ],
      questionMaxScore: 3,
      isLongAnswer: false	
    },
    {
      id: 5,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '核心价值观' },
        //{ type: 'text', content: '\n' },   
        { type: 'blank', blankId: 501 },           
        { type: 'blank', blankId: 502 },           
        { type: 'blank', blankId: 503 },           
        { type: 'blank', blankId: 504 }
      ],
      blanks: [
        { blankId: 501, score: 2, userAnswer: '', standardAnswer: '为员工创造事业' },
        { blankId: 502, score: 2, userAnswer: '', standardAnswer: '为客户创造满意' },
        { blankId: 503, score: 2, userAnswer: '', standardAnswer: '为所有者创造财富' },
        { blankId: 504, score: 2, userAnswer: '', standardAnswer: '为社会创造文明' }
      ],
      questionMaxScore: 8,
      isLongAnswer: false	
    },
    {
      id: 6,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '管理人员评价标准' },
        //{ type: 'text', content: '\n' },   
        { type: 'blank', blankId: 601 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 602 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 603 }
      ],
      blanks: [
        { blankId: 601, score: 1, userAnswer: '', standardAnswer: '看状态' },
        { blankId: 602, score: 1, userAnswer: '', standardAnswer: '看思路' },
        { blankId: 603, score: 1, userAnswer: '', standardAnswer: '看结果' }
      ],
      questionMaxScore: 3,
      isLongAnswer: false	
    },
    {
      id: 7,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '管理人员道德标准' },
        //{ type: 'text', content: '\n' },   
        { type: 'blank', blankId: 701 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 702 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 703 }
      ],
      blanks: [
        { blankId: 701, score: 1, userAnswer: '', standardAnswer: '志向要高远' },
        { blankId: 702, score: 1, userAnswer: '', standardAnswer: '情趣要高雅' },
        { blankId: 703, score: 1, userAnswer: '', standardAnswer: '行为要高洁' }
      ],
      questionMaxScore: 3,
      isLongAnswer: false	
    },
    {
      id: 8,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '党委书记工作要求' },
        //{ type: 'text', content: '\n' },   
        { type: 'blank', blankId: 801 },  
        { type: 'blank', blankId: 802 },  
        { type: 'blank', blankId: 803 },  
        { type: 'blank', blankId: 804 }
      ],
      blanks: [
        { blankId: 801, score: 1, userAnswer: '', standardAnswer: '把关定向' },
        { blankId: 802, score: 1, userAnswer: '', standardAnswer: '造势育人' },
        { blankId: 803, score: 1, userAnswer: '', standardAnswer: '排忧解难' },
        { blankId: 804, score: 1, userAnswer: '', standardAnswer: '拾遗补阙' }
      ],
      questionMaxScore: 4,
      isLongAnswer: false	
    },
    {
      id: 9,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '员工忠诚企业要求' },
        //{ type: 'text', content: '\n' },   
        { type: 'blank', blankId: 901 },         
        { type: 'blank', blankId: 902 },  
        { type: 'blank', blankId: 903 },   
        { type: 'blank', blankId: 904 },  
        { type: 'blank', blankId: 905 }
      ],
      blanks: [
        { blankId: 901, score: 2, userAnswer: '', standardAnswer: '认真履行岗位职责' },
        { blankId: 902, score: 2, userAnswer: '', standardAnswer: '主动适应改革变化' },
        { blankId: 903, score: 2, userAnswer: '', standardAnswer: '自觉维护企业形象' },
        { blankId: 904, score: 2, userAnswer: '', standardAnswer: '关心企业发展建设' },
        { blankId: 905, score: 2, userAnswer: '', standardAnswer: '与企业荣辱与共' }
      ],
      questionMaxScore: 10,
      isLongAnswer: false	
    },
    {
      id: 10,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '集团化管理' },
        //{ type: 'text', content: '\n' },
        { type: 'blank', blankId: 1001 }, 
        { type: 'text', content: '  ' },      
        { type: 'blank', blankId: 1002 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1003 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1004 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1005 }
      ],
      blanks: [
        { blankId: 1001, score: 1, userAnswer: '', standardAnswer: '宏观控制' },
        { blankId: 1002, score: 1, userAnswer: '', standardAnswer: '微观放活' },
        { blankId: 1003, score: 1, userAnswer: '', standardAnswer: '独立运行' },
        { blankId: 1004, score: 1, userAnswer: '', standardAnswer: '共谋发展' },
        { blankId: 1005, score: 3, userAnswer: '', standardAnswer: '充分发挥集团公司、成员企业和各级政府的积极性' }
      ],
      questionMaxScore: 7,
      isLongAnswer: false	
    },
    {
      id: 11,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '支线机场管理' },
        //{ type: 'text', content: '\n' },   
        { type: 'blank', blankId: 1101 },
        { type: 'text', content: '  ' },   
        { type: 'blank', blankId: 1102 },
        { type: 'text', content: '  ' },   
        { type: 'blank', blankId: 1103 },
        { type: 'text', content: '  ' },   
        { type: 'blank', blankId: 1104 }
      ],
      blanks: [
        { blankId: 1101, score: 1, userAnswer: '', standardAnswer: '积极扶持' },
        { blankId: 1102, score: 1, userAnswer: '', standardAnswer: '因地制宜' },
        { blankId: 1103, score: 1, userAnswer: '', standardAnswer: '自力更生' },
        { blankId: 1104, score: 1, userAnswer: '', standardAnswer: '自我发展' }
      ],
      questionMaxScore: 4,
      isLongAnswer: false	
    },
    {
      id: 12,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '机场建设管理' },
        //{ type: 'text', content: '\n' },
        { type: 'blank', blankId: 1201 }, 
        { type: 'text', content: '  ' },      
        { type: 'blank', blankId: 1202 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1203 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1204 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1205 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1206 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1207 }
      ],
      blanks: [
        { blankId: 1201, score: 1, userAnswer: '', standardAnswer: '功能完善' },
        { blankId: 1202, score: 1, userAnswer: '', standardAnswer: '流程合理' },
        { blankId: 1203, score: 1, userAnswer: '', standardAnswer: '节约资源' },
        { blankId: 1204, score: 1, userAnswer: '', standardAnswer: '控制投资' },
        { blankId: 1205, score: 1, userAnswer: '', standardAnswer: '特色突出' },
        { blankId: 1206, score: 1, userAnswer: '', standardAnswer: '方便旅客' },
        { blankId: 1207, score: 1, userAnswer: '', standardAnswer: '绿色环保' }
      ],
      questionMaxScore: 7,
      isLongAnswer: false	
    },
    {
      id: 13,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '辅业公司管理' },
        //{ type: 'text', content: '\n' },
        { type: 'blank', blankId: 1301 }, 
        { type: 'text', content: '  ' },      
        { type: 'blank', blankId: 1302 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1303 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1304 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1305 }
      ],
      blanks: [
        { blankId: 1301, score: 1, userAnswer: '', standardAnswer: '政策给足' },
        { blankId: 1302, score: 1, userAnswer: '', standardAnswer: '改革到位' },
        { blankId: 1303, score: 1, userAnswer: '', standardAnswer: '支持到边' },
        { blankId: 1304, score: 1, userAnswer: '', standardAnswer: '断其后路' },
        { blankId: 1305, score: 1, userAnswer: '', standardAnswer: '不生就死' }
      ],
      questionMaxScore: 5,
      isLongAnswer: false	
    },
    {
      id: 14,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '环境形象建设' },   
        //{ type: 'text', content: '\n' },  
        { type: 'blank', blankId: 1401 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1402 },
        { type: 'text', content: '  ' },
        { type: 'blank', blankId: 1403 }
      ],
      blanks: [
        { blankId: 1401, score: 1, userAnswer: '', standardAnswer: '环境和形象也是生产力' },
        { blankId: 1402, score: 1, userAnswer: '', standardAnswer: '也是凝聚力' },
        { blankId: 1403, score: 1, userAnswer: '', standardAnswer: '也会出效益' }
      ],
      questionMaxScore: 3,
      isLongAnswer: false	
    },
    {
      id: 15,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '安全管理' },  
        //{ type: 'text', content: '\n' },  
        { type: 'text', content: '第一，' },   
        { type: 'blank', blankId: 1501 },
        //{ type: 'text', content: '\n' },  
        { type: 'text', content: '第二，' },           
        { type: 'blank', blankId: 1502 },
        //{ type: 'text', content: '\n' },  
        { type: 'text', content: '第三，' },   
        { type: 'blank', blankId: 1503 },
       // { type: 'text', content: '\n' },  
        { type: 'text', content: '第四，' },           
        { type: 'blank', blankId: 1504 },
        //{ type: 'text', content: '\n' },  
        { type: 'text', content: '第五，' },   
        { type: 'blank', blankId: 1505 },        
       // { type: 'text', content: '\n' },  
        { type: 'text', content: '第六，' }, 
        { type: 'blank', blankId: 1506 }
      ],
      blanks: [
        { blankId: 1501, score: 3, userAnswer: '', standardAnswer: '安全是机场生存和发展的根基和基本前提，是永恒的主题和永远需要解决的矛盾。因此，在任何时候，安全第一的思想不能动摇，安全第一的责任不能淡化，安全第一的工作不能松懈。' },
        { blankId: 1502, score: 3, userAnswer: '', standardAnswer: '安全是一个运动的过程，是一个系统工程，是由各方面的因素决定的。因此，安全是相对的，不是绝对的。安全工作只有起点、没有终点，永远要从零开始。' },
        { blankId: 1503, score: 3, userAnswer: '', standardAnswer: '安全是相对的，并不等于说我们的工作就是消极被动的。恰恰相反，安全工作是有规律的，而规律是可以认识和把握的，只要工作到位，安全是有保证的。' },
        { blankId: 1504, score: 3, userAnswer: '', standardAnswer: '安全是反映机场工作的综合指标。既是服务工作的基本内容，也是效益的重要保证；既是企业生存的本质要求，也是企业品牌的基本要素。因此，有了安全不一定就有一切，但没有安全一切都没有。' },
        { blankId: 1505, score: 2, userAnswer: '', standardAnswer: '保证安全要靠法律、靠规章、靠制度，不能靠波浪式、运动式、经验式管理，不能搞短期行为。只有严格遵守法律和规章制度，才能从根本上保证安全。' },        
        { blankId: 1506, score: 3, userAnswer: '', standardAnswer: '人是安全生产中最积极、最活跃、起决定作用的要素。因此，安全工作要以人为本，通过加强对员工的培训，提高员工的素质和业务技能，才能为保证安全奠定坚实的基础。' }
      ],
      questionMaxScore: 17,
	    isLongAnswer: true				
    },
    {
      id: 16,
      type: 'fill',
      titleFragments: [
        { type: 'text', content: '服务工作' },   
        //{ type: 'text', content: '\n' },  
        { type: 'text', content: '第一，' }, 
        { type: 'blank', blankId: 1601 },
        //{ type: 'text', content: '\n' },  
        { type: 'text', content: '第二，' },           
        { type: 'blank', blankId: 1602 },
        //{ type: 'text', content: '\n' },  
        { type: 'text', content: '第三，' }, 
        { type: 'blank', blankId: 1603 }
      ],
      blanks: [
        { blankId: 1601, score: 2, userAnswer: '', standardAnswer: '服务是一种精神，是一种文化，是一种境界，更是一种竞争力。企业效益通过服务去创造，企业品牌通过服务去树立，企业文化通过服务去体现，企业战略通过服务去实现。' },
        { blankId: 1602, score: 2, userAnswer: '', standardAnswer: '做好服务工作，必须建立科学的标准体系，必须建立完善的管理制度，必须实施严密的过程控制，必须落实在员工的行为当中。' },
        { blankId: 1603, score: 2, userAnswer: '', standardAnswer: '服务与安全是集团发展的两翼，只有持续改进服务工作，不断满足各级政府、航空公司、旅客等服务对象的需求，才能不断拓展集团生存和发展空间。' }
      ],
      questionMaxScore: 6,
	    isLongAnswer: true				
    }
  ],
  
    // 获取所有题目
  getQuestions() {
    return this.questions;
  },
  
  // 获取题目总分
  getTotalMaxScore() {
    return this.questions.reduce((sum, question) => sum + question.questionMaxScore, 0);
  },
  
  // 判断是否为长答案题目
  isLongAnswer(questionId) {
    const question = this.questions.find(q => q.id === questionId);
    return question ? question.isLongAnswer : false;
  },
  
// 获取最大长度限制
  getMaxLength(questionId) {
    const question = this.questions.find(q => q.id === questionId);
    return question && question.isLongAnswer ? 100 : 30;
  }
};

module.exports = questionBank;