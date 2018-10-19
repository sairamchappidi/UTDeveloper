const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname, 'src')
	],
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
		}),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: [ 'react-hmre' ]
					}
				},
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'sass-loader', // compiles Sass to CSS, using Node Sass by default
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
                return [
                  require('autoprefixer')
                ];
              }
						}
					}
				],
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.(jpe?g|png|gif|mp3)$/i,
				include: path.resolve(__dirname, 'src'),
				loaders: ['file-loader']
			}, 
		]
	}
};
