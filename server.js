import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from './src/middleware';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
console.log(process.env.APP_API_KEY, 'APP_API_KEY');

if(process.env.NODE_ENV === 'development') {
	const config = require('./webpack.config.dev');
	const compiler = webpack(config);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}));
	app.use(require('webpack-hot-middleware')(compiler));
	app.use(express.static(path.resolve(__dirname, 'src')));
} else if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, 'dist')));
}

app.get('*', middleware);

app.listen(3000, '0.0.0.0', (err) => {
	if(err) {
		console.error(err);
	} else {
		console.info('Listening at http://localhost:3000');	
	}
});
