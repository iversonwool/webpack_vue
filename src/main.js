import {createApp} from 'vue'
import App from "./App";
import router from "./router";

// import "./styles/element/index.scss"
// 在webpack.config.js文件配置

createApp(App)
  .use(router)
  .mount(document.getElementById('app'))