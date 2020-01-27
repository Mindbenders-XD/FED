module.exports = {
    dev: {
        bsFiles: {
            src: [
              'content/themes/default/site/css/app.min.css',
              'content/themes/default/site/js/*.js',
              'Views/**/*.html'
            ]
        },
        options: {
            watchTask: true,
            server: "./"
        }
    }
};