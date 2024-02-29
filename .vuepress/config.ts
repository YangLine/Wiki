import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Craft Space - Wiki",
  description: "Craft Space 纯生存服务器 我们致力于给喜欢MC的小伙伴提供一个一起联机的平台，在这里有和谐的玩家交流环境，你可以做你想做的任何事情，除了破坏。两个技术每天基本会在线，有任何Bug也会及时解决。如果是合理的意见我们也会积极采纳并改进。如果你感兴趣的话就赶紧加入我们吧!",
  theme: recoTheme({
    sitename: "wwww",
    primaryColor: '#ffc800',
    style: "@vuepress-reco/style-default",
    author: "Yang Line",
    authorAvatar: "http://q.qlogo.cn/headimg_dl?dst_uin=255433320&spec=640&img_type=png",
    docsBranch: "main",
    docsDir: "",
    lastUpdatedText: "",
    logo: "",
    // series 为原 sidebar
    series: {
      "/": [
        {
          text: "写在前面", link: "/front.html",
          children: []
        },
        {
          text: "🍖游戏指南", link: "/survival",
          children: []
        },
        {
          text: "🌿基础", link: "/main",
          children: [
            { text: "🧭菜单", link: "/main/menu.html" },
            { text: "💵经济", link: "/main/economy.html" },
            { text: "⛔领地", link: "/main/residence.html" },
            { text: "🏪商店", link: "/main/shop.html" },
            { text: "🏆抽奖" ,link: "/main/lottery.html" },
            { text: "🏅称号", link: "/main/title.html" },
            { text: "🧒🏻用户中心", link: "/main/center.html" },
          ],
        },
        { text: "📜任务", link: "/task",
          children: []
        },
        { text: "🔧技能", link: "/ability",
          children: []
        },
        { text: "🍺酿酒", link: "/ability",
          children: []
        },
        { text: "⚡️强化", link: "/ability",
          children: []
        },
        {
          text: "🎄粘液科技", link: "/slimefun",
          children: [
            "null"
          ],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "https://www.craftspace.top" },
      { text: "日志", link: "https://www.craftspace.top/logs" },
      { text: "文档", link: "/tags/tag1/1/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "title",
          content: "服务器核心更新3.2",
          style: "font-size: 24px;",
        },
        {
          type: "text",
          content: `·服务器菜单传送锚点功能已开启<br>·修复TAB列表群号错误<br>·修复了部分玩家看不见Boss栏TPS、MSPT、Ping等信息的Bug<br>·修复HK线路无法访问问题<br>·官网已恢复<br>·移除了每日4:00自动重启<br>·更新了服务器文档的内容<br>·移除了Herobrine`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['link', { rel: 'stylesheet', href: '/index.css' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
  // debug: true,
});
