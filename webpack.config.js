const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const mode = process.env.NODE_ENV || 'development';


if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
  }
  module.exports =(env)=>{
    const isProduction = env === 'production';
    return{
      
      stats: {
        errorDetails: true,
      },
        mode,
        entry: './src/index.tsx',
        output:{
            path:path.join(__dirname,'public','dist'),
            filename: 'bundle.js',
            publicPath:'/dist/'
            
        },
      
        plugins:[
          new HtmlWebpackPlugin({
            template: './public/index.html',
          }),
          new MiniCssExtractPlugin(),
         
        ],
        module:{
            rules: [
                { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
                {
                  test: /\.s?css$/,
                  use: [
                    mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                  ],
                },
               
              ],
        }, 
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
          },     
        devtool:isProduction?'source-map':'inline-source-map',
        devServer :{
            static: {
                directory: path.join(__dirname, 'public'),
              },
            historyApiFallback:true
        }
    }
}
