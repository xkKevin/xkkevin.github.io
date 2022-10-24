module.exports = {
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js', // 入口文件
      title: "Kai Xiong's Homepage"
    }
  },
  publicPath: './',
  outputDir: 'docs',
  assetsDir: 'static'
}
