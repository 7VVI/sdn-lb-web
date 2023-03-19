module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  files: ['src/**/**/*.vue'],
  rules: {
    // indent: [2, 2] // 强制使用一致的缩进
    'vue/multi-word-component-names': 0
  }
}
