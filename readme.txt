
环境：window 11
         微信开发者工具2.01.2511182

CWAGCulExam
├── images/
│   └── logo.png       # 请自行替换为实际LOGO图片
├── pages/
│   ├── index/         # 登录首页
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── quiz/          # 答题页面
│   │   ├── quiz.js
│   │   ├── quiz.json
│   │   ├── quiz.wxml
│   │   └── quiz.wxss
│   └── result/        # 结果页面
│       ├── result.js
│       ├── result.json
│       ├── result.wxml
│       └── result.wxss
├── components/        # 通用组件（支持多题型扩展）
│   ├── fill-question/ # 填空题组件
│   │   ├── fill-question.js
│   │   ├── fill-question.json
│   │   ├── fill-question.wxml
│   │   └── fill-question.wxss
│   ├── choice-question/ # 选择题组件（预留）
│   │   ├── choice-question.js
│   │   ├── choice-question.json
│   │   ├── choice-question.wxml
│   │   └── choice-question.wxss
│   └── essay-question/ # 简答题组件（预留）
│       ├── essay-question.js
│       ├── essay-question.json
│       ├── essay-question.wxml
│       └── essay-question.wxss
├── utils/
│   ├── questionBank.js # 完整题库文件
│   └── scoreUtil.js    # 评分工具类
├── app.js
├── app.json
└── app.wxss
```