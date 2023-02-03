import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

const postcsspxtoviewport = require('postcss-px-to-viewport')
export default ({ mode }) => {
  // const env = loadEnv(mode, process.cwd())
  // https://vitejs.dev/config/
  return defineConfig({
    base: '/',
    plugins: [react()],
    // build: {
    //   outDir: env.VITE_APP_BUILD === 'prod' ? 'dist-prod' : env.VITE_APP_BUILD === 'johnson' ? 'dist-johnson' : 'dist'
    // },
    build: {
      outDir: 'dist'
    },
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 6,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: ['ignore-'],
            minPixelValue: 1,
            mediaQuery: true,
            replace: true,
            exclude: [],
            landscape: false
          })
        ]
      },
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      host: true,
      port: 3000, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      // 设置代理，根据项目实际情况配置
      proxy: {
      }
    }
  })
}
