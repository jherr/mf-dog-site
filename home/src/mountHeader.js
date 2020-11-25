import { createApp } from "vue";
import Header from "./Header.vue";

export default (selector, props = {}) => {
  const app = createApp(Header);
  app.config.globalProperties.props = props;
  app.mount(selector);
};
