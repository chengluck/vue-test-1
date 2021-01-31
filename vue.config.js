module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-test-1/dist/'
        : '/'
}