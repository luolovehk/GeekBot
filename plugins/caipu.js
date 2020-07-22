// 菜谱
// 注意：需申请API KEY，设置到secrets中，名称：tianapi_key
// https://www.tianapi.com/apiview/23

const Bot = require('../modules/bot');
const axios = require('axios').default;

class Plugin extends Bot {
  constructor () {
    super();
    this.API = 'http://api.tianapi.com/txapi/caipu/index';
    this.API_KEY = process.env.tianapi_key;
    if (!this.API_KEY) return this.exit();
  }

  run () {
    axios.get(this.API + '?key=' + this.API_KEY).then(res => {
      const c = (`> 🥕每日菜谱🌽 <\n\n${res.data.newslist[0].type_name}\n\n${res.data.newslist[0].cp_name}\n\n${res.data.newslist[0].zuofa}\n\n${res.data.newslist[0].texing}\n\n${res.data.newslist[0].tiaoliao}\n\n${res.data.newslist[0].yuanliao}`);
      this.sendText(c);
    });
  }
}

new Plugin().run();
