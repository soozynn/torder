module.exports = {
  parser: '@babel/eslint-parser', // Babel을 ESLint와 함께 사용
  parserOptions: {
    requireConfigFile: false, // Babel 설정 없이 바로 사용할 수 있도록 설정
  },
  extends: [
    'eslint:recommended', // 기본 ESLint 규칙
    'plugin:react/recommended', // React 관련 규칙
  ],
  plugins: ['react'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/prop-types': 'off', // prop-types 체크 비활성화 (선택사항)
  },
};
