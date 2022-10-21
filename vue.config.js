module.exports = {
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js', // 入口文件
      title: "Welcome to Kai's Homepage"
    }
  },
  publicPath: './',
  outputDir: 'docs',
  assetsDir: 'static'
}
