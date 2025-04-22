const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 앱의 진입점
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들된 파일이 저장될 디렉토리
    filename: 'bundle.js', // 번들 파일명
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // `dist` 폴더를 static 파일 제공 폴더로 설정
    },
    compress: true, // Gzip 압축 활성화
    port: 8001, // 개발 서버 포트
    open: true, // 서버 시작 시 자동으로 브라우저 열기
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@features': path.resolve(__dirname, 'src/features'),
    },
    extensions: ['.js', '.jsx', '.svg'], // 파일 확장자 설정
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 이미지 확장자
        type: 'asset/resource', // 파일을 그대로 복사하여 URL로 불러옴
      },
      {
        test: /\.js|\.jsx$/, // JS 및 JSX 파일에 Babel 적용
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // 최신 JavaScript 및 React JSX 변환
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML 템플릿 파일
    }),
  ],
};
