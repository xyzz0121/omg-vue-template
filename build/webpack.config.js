const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
	mode: 'development',
	devServer: {
		hot: true,
		port: 3000,
		contentBase: './dist'
	},
	//入口文件 TODO:path统一管理
	entry: {
		main: ["@babel/polyfill", path.resolve(__dirname, '../src/main.js')]
	},
	output: {
		//配置打包文件输入
		path: path.resolve(__dirname, '../dist'),
		//生成的js文件名
		filename: 'js/[name].[hash:8].js',
		//生成的chunk名
		chunkFilename: 'js/[name].[hash:8].js',
		//资源引用路径
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [{
						loader: 'cache-loader'
					},
					{
						loader: 'thread-loader'
					},
					{
						loader: 'vue-loader',
						options: {
							compilerOptions: {
								preserveWhitespace: false
							},
						}
					}
				]
			},
			{
				test: /\.jsx?$/,
				use: [{
						loader: 'cache-loader'
					},
					{
						loader: 'thread-loader'
					},
					{
						loader: 'babel-loader'
					}
				]
			},
			{
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 4096,
						fallback: {
							loader: 'file-loader',
							options: {
								name: 'img/[name].[hash:8].[ext]'
							}
						}
					}
				}]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 4096,
						fallback: {
							loader: 'file-loader',
							options: {
								name: 'media/[name].[hash:8].[ext]'
							}
						}
					}
				}]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 4096,
						fallback: {
							loader: 'file-loader',
							options: {
								name: 'fonts/[name].[hash:8].[ext]'
							}
						}
					}
				}]
			},
	]
},
plugins: [
	new HtmlWebpackPlugin({
		inject: true,
		template: path.resolve(__dirname, '../public/index.html'),
	}),
	new VueLoaderPlugin(),
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.DefinePlugin({
		'process.env': {
			VUE_APP_BASE_URL: JSON.stringify('http://localhost:3000')
		}
	}),
]
}