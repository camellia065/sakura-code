import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  // 站点的基本配置
  url: 'https://valaxy.site/', // 站点的 URL 地址
  lang: 'zh-CN', // 站点语言设置，简体中文
  title: '山茶花', // 站点标题，将显示在浏览器标签栏
  author: {
    name: 'Sakrua', // 站点作者名称
  },
  description: '欢迎参观Sakrua的blog', // 站点的描述，通常用于 SEO 优化
  social: [
    // 社交链接配置，包含站点的各个社交平台的链接
    {
      name: 'RSS', // 名称，表示该社交平台为 RSS
      link: '/atom.xml', // RSS 链接地址
      icon: 'i-ri-rss-line', // 图标，来自 Remix Icon 图标库
      color: 'orange', // 图标颜色
    },
    {
      name: 'QQ 2038833793', // 社交平台名称
      link: '', // 你的 QQ 个人链接
      icon: 'i-ri-qq-line', // QQ 图标
      color: '#12B7F5', // QQ 图标的颜色
    },
    {
      name: 'GitHub', // GitHub 链接
      link: 'https://github.com/YunYouJun', // GitHub 个人主页链接
      icon: 'i-ri-github-line', // GitHub 图标
      color: '#6e5494', // GitHub 图标颜色
    },
    {
      name: '微博', // 微博链接
      link: '', // 微博链接
      icon: 'i-ri-weibo-line', // 微博图标
      color: '#E6162D', // 微博图标颜色
    },
    {
      name: '豆瓣', // 豆瓣链接
      link: '', // 豆瓣链接
      icon: 'i-ri-douban-line', // 豆瓣图标
      color: '#007722', // 豆瓣图标颜色
    },
    {
      name: '网易云音乐', // 网易云音乐链接
      link: '', // 网易云音乐链接
      icon: 'i-ri-netease-cloud-music-line', // 网易云音乐图标
      color: '#C20C0C', // 网易云音乐图标颜色
    },
    {
      name: '知乎', // 知乎链接
      link: '', // 知乎链接
      icon: 'i-ri-zhihu-line', // 知乎图标
      color: '#0084FF', // 知乎图标颜色
    },
    {
      name: '哔哩哔哩', // 哔哩哔哩链接
      link: '', // 哔哩哔哩链接
      icon: 'i-ri-bilibili-line', // 哔哩哔哩图标
      color: '#FF8EB3', // 哔哩哔哩图标颜色
    },
    {
      name: '微信公众号', // 微信公众号链接
      link: '', // 微信公众号链接
      icon: 'i-ri-wechat-2-line', // 微信公众号图标
      color: '#1AAD19', // 微信公众号图标颜色
    },
    {
      name: 'Twitter', // Twitter 链接
      link: '', // Twitter 链接
      icon: 'i-ri-twitter-x-fill', // Twitter 图标
      color: 'black', // Twitter 图标颜色
    },
    {
      name: 'Telegram Channel', // Telegram 频道链接
      link: '', // Telegram 频道链接
      icon: 'i-ri-telegram-line', // Telegram 图标
      color: '#0088CC', // Telegram 图标颜色
    },
    {
      name: 'E-Mail', // 电子邮件链接
      link: 'camellia065@outlook.com', // 电子邮件地址
      icon: 'i-ri-mail-line', // 邮件图标
      color: '#8E71C1', // 邮件图标颜色
    },
    {
      name: 'Travelling', // 旅行相关链接
      link: 'https://www.travellings.cn/go.html', // 旅行链接
      icon: 'i-ri-train-line', // 旅行图标
      color: 'var(--va-c-text)', // 图标颜色，可以使用 CSS 变量
    },
  ],

  // 搜索配置，这里禁用搜索功能
  search: {
    enable: true, // 禁用站内搜索功能
  },

  // 捐赠支持配置，开启后显示捐赠信息
  sponsor: {
    enable: true, // 启用捐赠功能
    title: '我很可爱，请给我钱！', // 捐赠标题
    methods: [
      {
        name: '支付宝', // 支付宝捐赠方式
        url: '', // 支付宝二维码或链接
        color: '#00A3EE', // 支付宝图标颜色
        icon: 'i-ri-alipay-line', // 支付宝图标
      },
      {
        name: 'QQ 支付', // QQ 支付捐赠方式
        url: '', // QQ 支付链接
        color: '#12B7F5', // QQ 图标颜色
        icon: 'i-ri-qq-line', // QQ 图标
      },
      {
        name: '微信支付', // 微信支付捐赠方式
        url: '', // 微信支付链接
        color: '#2DC100', // 微信图标颜色
        icon: 'i-ri-wechat-pay-line', // 微信支付图标
      },
    ],
  },
})