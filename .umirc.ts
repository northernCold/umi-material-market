import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'hi', // 配置标题或针对路由配置title
  routes: [{ path: '/', title: 'Home', component: '@/pages/index' }],
  fastRefresh: {},
});
