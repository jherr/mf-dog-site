import { createApp } from "vue";
import Header from "./Header.vue";

export default (selector) => {
  createApp(Header).mount(selector);
};
