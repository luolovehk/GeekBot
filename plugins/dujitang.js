const Bot = require('../modules/bot');
const axios = require('axios').default;

class Plugin extends Bot {
  constructor () {
    super();
    this.API = 'http://52huazhou.cn/2021';
    if (process.env.plug_disabled === 'true') this.exit();
  }
  run () {
    axios.get(this.API).then(res => {
      this.sendMarkdown(`> 💥【春节倒计时】💥\n\n${res.data}`);
    })
  }
}

new Plugin().run();
