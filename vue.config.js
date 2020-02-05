module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '~@/assets/css/main.sass';`
      }
    }
  },
  devServer: {
    proxy: 'http://127.0.0.1:8000'
  },
  outputDir: '../public',
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
    : 'index.html'
}