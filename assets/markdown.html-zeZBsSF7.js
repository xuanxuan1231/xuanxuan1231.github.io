import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as i,c as d,e as a,a as e,b as n,d as r,n as p,g as c,f as o}from"./app-iGwktXZA.js";const u={},m=e("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),_=e("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),f=e("h2",{id:"markdown-介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),n(" Markdown 介绍")],-1),g={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"markdown-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),n(" Markdown 配置")],-1),b=e("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),w={class:"hint-container info"},x=e("p",{class:"hint-container-title"},"相关信息",-1),j={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"markdown-扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),n(" Markdown 扩展")],-1),M={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"vuepress-扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),n(" VuePress 扩展")],-1),V=e("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),P={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},A=e("h3",{id:"主题扩展",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),n(" 主题扩展")],-1),B={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"vuepress-plugin-md-enhance",-1),F=o(`<h4 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器" aria-hidden="true">#</a> 提示容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,7),N={href:"https://theme-hope.vuejs.press/zh/guide/markdown/hint.html",target:"_blank",rel:"noopener noreferrer"},C=o(`<h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h4><p>::: code-tabs</p><p>@tab pnpm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@tab yarn</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@tab:active npm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>`,9),$={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},H=e("h4",{id:"上下角标",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),n(" 上下角标")],-1),I=e("p",null,[n("19"),e("sup",null,"th"),n(" H"),e("sub",null,"2"),n("O")],-1),R={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},L=e("h4",{id:"自定义对齐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),n(" 自定义对齐")],-1),S=e("div",{style:{"text-align":"center"}},[e("p",null,"我是居中的")],-1),T=e("div",{style:{"text-align":"right"}},[e("p",null,"我在右对齐")],-1),K={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},O=e("h4",{id:"attrs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),n(" Attrs")],-1),W=e("p",null,[n("一个拥有 ID 的 "),e("strong",{id:"word"},"单词"),n("。")],-1),q={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},G=e("h4",{id:"脚注",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#脚注","aria-hidden":"true"},"#"),n(" 脚注")],-1),J=e("p",null,[n("此文字有脚注"),e("a",{href:"%E8%BF%99%E6%98%AF%E8%84%9A%E6%B3%A8%E5%86%85%E5%AE%B9"},"^first"),n(".")],-1),Q={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},U=e("h4",{id:"标记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),n(" 标记")],-1),X=e("p",null,"你可以标记 ==重要的内容== 。",-1),Y={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},Z=e("h4",{id:"任务列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),n(" 任务列表")],-1),ee=e("li",null,[e("p",null,"[x] 计划 1")],-1),ne=e("li",null,[e("p",null,"[ ] 计划 2")],-1),re={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},te=e("h3",{id:"图片增强",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),n(" 图片增强")],-1),se=e("p",null,"支持为图片设置颜色模式和大小",-1),ae={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},oe=e("h4",{id:"组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#组件","aria-hidden":"true"},"#"),n(" 组件")],-1),he={href:"https://theme-hope.vuejs.press/zh/guide/markdown/component.html",target:"_blank",rel:"noopener noreferrer"},le=e("h4",{id:"导入文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),n(" 导入文件")],-1),ie={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},de=e("h4",{id:"样式化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),n(" 样式化")],-1),pe=e("p",null,[n("向 Mr.Hope 捐赠一杯咖啡。 "),e("em",null,"Recommended")],-1),ce={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},ue=e("h4",{id:"tex-语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),n(" Tex 语法")],-1),me=e("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1),_e={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},fe=e("h4",{id:"图表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图表","aria-hidden":"true"},"#"),n(" 图表")],-1),ge=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html",width:"100%",height:"450"},null,-1),ke={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chartjs.html",target:"_blank",rel:"noopener noreferrer"},ve=e("h4",{id:"echarts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),n(" Echarts")],-1),be=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html",width:"100%",height:"800"},null,-1),we={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},xe=e("h4",{id:"流程图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),n(" 流程图")],-1),je=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html",width:"100%",height:"450"},null,-1),ze={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Me=e("h4",{id:"markmap",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markmap","aria-hidden":"true"},"#"),n(" MarkMap")],-1),ye=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html",width:"100%",height:"380"},null,-1),Ee={href:"https://theme-hope.vuejs.press/zh/guide/markdown/markmap.html",target:"_blank",rel:"noopener noreferrer"},Ve=e("h4",{id:"mermaid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),n(" Mermaid")],-1),Pe=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html",width:"100%",height:"620"},null,-1),Ae={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},Be=e("h4",{id:"代码演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),n(" 代码演示")],-1),De=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html",width:"100%",height:"450"},null,-1),Fe={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Ne=e("h4",{id:"交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#交互演示","aria-hidden":"true"},"#"),n(" 交互演示")],-1),Ce=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html",width:"100%",height:"480"},null,-1),$e={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},He=e("h4",{id:"kotlin-交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kotlin-交互演示","aria-hidden":"true"},"#"),n(" Kotlin 交互演示")],-1),Ie=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html",width:"100%",height:"220"},null,-1),Re={href:"https://theme-hope.vuejs.press/zh/guide/markdown/kotlin-playground.html",target:"_blank",rel:"noopener noreferrer"},Le=e("h4",{id:"vue-交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-交互演示","aria-hidden":"true"},"#"),n(" Vue 交互演示")],-1),Se=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html",width:"100%",height:"380"},null,-1),Te={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Ke=e("h4",{id:"sandpack-交互演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sandpack-交互演示","aria-hidden":"true"},"#"),n(" Sandpack 交互演示")],-1),Oe=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html",width:"100%",height:"380"},null,-1),We={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sandpack.html",target:"_blank",rel:"noopener noreferrer"},qe=e("h4",{id:"幻灯片",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),n(" 幻灯片")],-1),Ge=e("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html",width:"100%",height:"400"},null,-1),Je={href:"https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html",target:"_blank",rel:"noopener noreferrer"};function Qe(Ue,Xe){const t=s("ExternalLinkIcon"),h=s("VPCard");return i(),d("div",null,[m,_,a(" more "),f,e("p",null,[n("如果你是一个新手，还不会编写 Markdown，请先阅读 "),e("a",g,[n("Markdown 介绍"),r(t)]),n(" 和 "),e("a",k,[n("Markdown 演示"),r(t)]),n("。")]),v,b,e("div",w,[x,e("p",null,[n("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),e("a",j,[n("Frontmatter 介绍"),r(t)]),n("。")])]),z,e("p",null,[n("VuePress 会使用 "),e("a",M,[n("markdown-it"),r(t)]),n(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),e("a",y,[n("语法扩展"),r(t)]),n(" 。")]),E,V,e("p",null,[n("关于这些扩展，请阅读 "),e("a",P,[n("VuePress 中的 Markdown 扩展"),r(t)]),n("。")]),A,e("p",null,[n("通过 "),e("a",B,[D,r(t)]),n("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),F,e("ul",null,[e("li",null,[e("a",N,[n("查看详情"),r(t)])])]),C,e("ul",null,[e("li",null,[e("a",$,[n("查看详情"),r(t)])])]),H,I,e("ul",null,[e("li",null,[e("a",R,[n("查看详情"),r(t)])])]),L,S,T,e("ul",null,[e("li",null,[e("a",K,[n("查看详情"),r(t)])])]),O,W,e("ul",null,[e("li",null,[e("a",q,[n("查看详情"),r(t)])])]),G,J,e("ul",null,[e("li",null,[e("a",Q,[n("查看详情"),r(t)])])]),U,X,e("ul",null,[e("li",null,[e("a",Y,[n("查看详情"),r(t)])])]),Z,e("ul",null,[ee,ne,e("li",null,[e("p",null,[e("a",re,[n("查看详情"),r(t)])])])]),te,se,e("ul",null,[e("li",null,[e("a",ae,[n("查看详情"),r(t)])])]),oe,r(h,p(c({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16),e("ul",null,[e("li",null,[e("a",he,[n("查看详情"),r(t)])])]),le,a(" @include: ./README.md{11-17} "),e("ul",null,[e("li",null,[e("a",ie,[n("查看详情"),r(t)])])]),de,pe,e("ul",null,[e("li",null,[e("a",ce,[n("查看详情"),r(t)])])]),ue,me,e("ul",null,[e("li",null,[e("a",_e,[n("查看详情"),r(t)])])]),fe,ge,e("ul",null,[e("li",null,[e("a",ke,[n("查看详情"),r(t)])])]),ve,be,e("ul",null,[e("li",null,[e("a",we,[n("查看详情"),r(t)])])]),xe,je,e("ul",null,[e("li",null,[e("a",ze,[n("查看详情"),r(t)])])]),Me,ye,e("ul",null,[e("li",null,[e("a",Ee,[n("查看详情"),r(t)])])]),Ve,Pe,e("ul",null,[e("li",null,[e("a",Ae,[n("查看详情"),r(t)])])]),Be,De,e("ul",null,[e("li",null,[e("a",Fe,[n("查看详情"),r(t)])])]),Ne,Ce,e("ul",null,[e("li",null,[e("a",$e,[n("查看详情"),r(t)])])]),He,Ie,e("ul",null,[e("li",null,[e("a",Re,[n("View Detail"),r(t)])])]),Le,Se,e("ul",null,[e("li",null,[e("a",Te,[n("查看详情"),r(t)])])]),Ke,Oe,e("ul",null,[e("li",null,[e("a",We,[n("查看详情"),r(t)])])]),qe,Ge,e("ul",null,[e("li",null,[e("a",Je,[n("查看详情"),r(t)])])])])}const en=l(u,[["render",Qe],["__file","markdown.html.vue"]]);export{en as default};
