// 运行时配置

// 渲染之前做权限校验
export function render(oldRender) {
  // console.log('oldRender()', oldRender)
  oldRender();
}
// 初始加载和路由切换时：埋点统计、设置标题
export function onRouteChange({ routes, matchedRoutes, location, action }) {
  // console.log('onRouteChange', routes, matchedRoutes, location, action)
  // if (matchedRoutes.length) {
  //   document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  // }
}
