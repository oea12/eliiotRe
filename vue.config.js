module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
        scss: {
            prependData: '@import "@/assets/css/style.scss";'            
        }
    }
  },  
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : ''
}