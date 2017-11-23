// webpack打包命令设置，默认会查找webpack.config.js,如果想改名字，可以自定义 webpack --config webpack.conf.js
// 浏览器是不能处理模块化的东西，所有如果直接访问index.html会报错，所以要用webpack来处理
// 先安装webpack npm i -D webpack
//node.js内置的模块, 主要是获取当前项目的根路径
const path = require('path')
// 不需要手动将index.html复制到dist里边 webpack有插件可以帮我们做这个
// 先安装模块 html-webpck-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry:'./src/app.js',  // webpack入口文件
	output:{// 打包完成
		path:path.resolve(__dirname,'dist'), // 生成的路径——dirname 根路径  
		filename:'main.js', // 打包成的文件名 
	},
	plugins: [// 插件 webpack插件
		new HtmlWebpackPlugin({
			filename:'index.html', // 打包生成默认的名字
			template:'./src/index.html' // 以哪个文件为模板
		})
	],
	module:{ // webpack用来预处理文件的在一个模块被移入之前，会使用loader进行预处理模块的内容
		rules:[
			{
				test:/\.js$/, // 以js结尾的文件
				use:[
					{
						loader:'babel-loader', // babel转换器需要安装babel-loader babel-core
						options:{
							presets:['react'] // 安装babel-preset-react
						}
					}
				]
			},
			{// 处理css中的url,会自动帮你引入里边的要引入的模块
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{// file-loader 1.把你的资源引入到输出目录 2.返回最终引入的url
				test:/\.(jpg|png|gif|jpeg)$/,
				use:[{
					loader:'url-loader',
					options:{
						limit:1000, // 单位kb
					}
				}] // 会将图片转化成base64格式 如果图片过大会得不偿失，会使浏览器加载数据过大,是file-loader的增强版
			},
			{// 处理字体文件
				test:/\.(ttf|eot|woff|woff2|svg)$/,
				use:['file-loader']
			}
		]
	},
	devServer:{// 设置webpack服务器
		open:true, // 是否默认打开浏览器
		port:9000  // 端口
	},
	
}
