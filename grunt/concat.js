module.exports = {
    sassConcat:{
    },
    jsConcat:{
        src: ['content/themes/default/site/js/app/**/*.js', '!content/themes/default/site/js/app.js', '!content/themes/default/site/js/app.min.js'],
        dest: 'content/themes/default/site/js/app.js'
    }, 
    vendorCssConcat:{
        src: ['content/themes/default/vendor/**/*.min.css', '!content/themes/default/vendor/vendor.min.css'],
        dest: 'content/themes/default/vendor/vendor.min.css'
    },
    vendorJsConcat:{
        src: ['content/themes/default/vendor/**/*.min.js', '!content/themes/default/vendor/vendor.min.js'],
        dest: 'content/themes/default/vendor/vendor.min.js'
    }
};