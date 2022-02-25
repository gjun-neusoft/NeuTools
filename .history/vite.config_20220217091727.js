import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir) {
    return resolve(__dirname, ".", dir);
}
// https://vitejs.dev/config/
export default defineConfig({
    //项目根目录
    root: process.cwd(),
    //项目部署的基础路径
    base: '/',
    //环境配置
    mode: 'development',
    //全局变量替换Record <string, string>
    // define: {
    //     "user": "users"
    // },
    //插件, 配置需要使用的插件列表，这里将vue添加进去
    plugins: [vue()],
    //静态资源服务的文件夹
    publicDir: "public",
    resolve: {
        //别名
        alias: {
            "@": path.resolve(__dirname, "/src"),
            "comps": path.resolve(__dirname, "/src/components")
        },
        dedupe: [],
        //情景导出package.json配置中的exports字段
        conditions: [],
        //解析package.json中的字段
        mainFields: ['module', 'jsnext:main', 'jsnext'],
        //导入时想要省略的扩展名列表
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    css: {
        //配置CSS modules的行为。选项将被传递给postcss-modules
        modules: {

        },
        //postCSS配置（格式 同postcss.config.ts）
        //postcss-load-config 的插件配置
        postcss: {

        },
        //指定传递给css预处理器的选项
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        }
    },
    json: {
        //是否支持从.json文件中进行按名导入
        nameExports: true,
        //若设置为 true, 导入的JSON会被转换为export default JSON.parse("...")会比转译成对象 字面量性能更好，
        //尤其是当JSON文件比较大的时候 
        //开启此项，则会禁 用按名导入
        stringify: false
    },
    //继承自esbuild转换选项。最常见的用例是自定义JSX
    // esbuild: {
    //     jsxFactory: 'h',
    //     jsxFragment: 'Fragment',
    //     jsxInject: `import React from 'react'`
    // },
    //静态资源处理 字符串|正则表达式
    assetsInclude: '',
    //调整控制台输出的级别'info' | 'warn' | 'error' | 'silent'
    logLevel: 'info',
    //设为false可以避免vite清屏而错过在终端中打印某些关键信息
    clearScreen: true,
    //服务
    server: {
        //服务器主机名
        host: "localhost",
        //端口号
        port: "80",
        //设为true 时若端口已被占用则会直接退出
        //而不是尝试下一个可用端口
        strictPort: true,
        //https.createServer()配置项
        https: "",
        //服务器启动时自动在浏览器中打开应用程序
        //当此值为字符串时，会被用作url的路径名
        open: '/index.html',
        //自定义代理规则
        proxy: {
            //字符串简写写法
            '/foo': 'http://localhost:7080/foo',
            //选项写法
            '/api': {
                target: 'http://10.13.21.49/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },


        },
        //开发服务 器配置CORS
        //boolean | CorsOptions
        cors: {},
        //设置为true强制使依赖预构建
        force: true,
        //禁用或配置HMR连接
        hmr: {},
        //传递给chokidar的文件系统监视器选项
        watch: {

        },
        //构建
        build: {
            //浏览器兼容性"esnext" | "modules"
            target: "modules",
            //输出路径
            outDir: "dist",
            //生成静态资源的存放路径
            assetsDir: "assets",
            //小于此阀值的导入或引用资源将内联为base64编码，以避免额外的http请求。设置为0或以完全禁用此项
            assetsInlineLimit: 4096,
            //启用/禁用CSS代码拆分
            cssCodeSplit: true,
            //构建后是否生成source map 文件
            sourcemap: false,
            //自定义 底层的Rollup打包配置
            rollupOptions: {

            },
            //@rollup/plugin-commonjs 插件的选项
            commonjsOptions: {

            },
            //构建的库
            lib: {},
            //当设置为 true，构建后将会生成 manifest.json 文件
            mainfest: false,
            //设置为 false 可以禁用最小化混淆，
            //或是用来指定使用哪种混淆器
            //boolean | 'terser' | 'esbuild'
            minify: "terser",
            //传递给 Terser 的更多 minify 选项。
            terserOptions: {

            },
            //设置为false来禁用将构建后的文件写入磁盘
            write: true,
            //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
            emptyOutDir: true,
            //启用/禁用 brotli 压缩大小报告
            brotliSize: true,
            //chunk 大小警告限制
            chunkSizeWarningLimit: 500
        },
        //依赖优化选项
        optimizeDeps: {
            //检测需要预构建的依赖项
            entrise: [

            ],
            //预构建中强制排除的依赖项
            exclude: [

            ],
            //默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
            include: [
                'axios'
            ]
        },
        //SSR选项
        ssr: {
            //列出的是要为SSR强制外部化的依赖
            external: [

            ],
            //列出的是防止被SSR外部化依赖项。
            noExternam: [

            ]
        }

    }

})