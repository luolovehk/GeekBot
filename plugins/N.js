// 名言警句
// 名人名言学以致用
// 注意：需申请API KEY，设置到secrets中，名称：tianapi_key
// https://www.tianapi.com/apiview/26

const Bot = require('../modules/bot');
const axios = require('axios').default;

class Plugin extends Bot {
  constructor () {
    super();
    this.API = 'http://api.tianapi.com/txapi/dictum/index';
    this.API_KEY = process.env.tianapi_key;
    if (!this.API_KEY) return this.exit();
  }

  run () {
    axios.get(this.API + '?key=' + this.API_KEY).then(res => {
      const c = (`> 🌛名人名言|学以致用🌛 <\n\n${res.data.newslist[0].content}——${res.data.newslist[0].mrname}`);
      this.sendText(c);
    });
  }
}

new Plugin().run();
