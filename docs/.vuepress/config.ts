import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "网站使用文档",
  description: "初一三班网站使用文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
