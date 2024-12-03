import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// 将需要的图标添加到 safelist，确保它们在最终构建时包含在内
const safelist = [
  'i-ri-home-line', // 示例图标，表示主页的图标，可以根据需要自由添加其他图标
]

/**
 * Valaxy 配置文件
 * 在这个文件中配置站点全局设置和主题相关的设置
 */
export default defineValaxyConfig<UserThemeConfig>({
  // 指定要使用的主题，这里使用 'yun' 主题
  theme: 'yun',

  /**
   * 主题配置部分
   * 用于自定义站点的 banner、footer 和额外的页面等
   */
  themeConfig: {
    // 配置主页顶部的横幅
    banner: {
      enable: true, // 启用或禁用横幅
      title: 'Sakura的小站', // 横幅显示的标题
    },

    // 配置站点中的额外页面
    pages: [
      {
        name: '我的小伙伴们', // 页面显示名称
        url: '/links/', // 路由 URL
        icon: 'i-ri-genderless-line', // 页面图标（来自图标库）
        color: 'dodgerblue', // 页面链接的颜色
      },
      {
        name: '喜欢的女孩子', // 页面显示名称
        url: '/girls/', // 路由 URL
        icon: 'i-ri-women-line', // 页面图标（来自图标库）
        color: 'hotpink', // 页面链接的颜色
      },
    ],

    // 配置页脚部分
    footer: {
      since: 2016, // 站点创建年份，将显示在页脚
      beian: {
        enable: true, // 启用或禁用 ICP 备案信息
        icp: '苏ICP备17038157号', // ICP 备案号
      },
    },
  },

  // 配置 unocss（用于实用类 CSS）
  unocss: {
    safelist, // 添加图标或类名到 safelist，避免在构建时被移除
  },
})