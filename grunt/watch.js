module.exports = {    
    sass: {
        files: ['content/themes/default/site/scss/**/*.scss', '!content/themes/default/site/scss/app.scss'],
      tasks: ['concat:sassConcat','sass','autoprefixer','cssmin']        
    },
    js: {
        files: ['gruntfile.js', 'content/themes/default/site/js/**/*.js', '!content/themes/default/site/js/app.js', '!content/themes/default/site/js/app.min.js'],
      tasks: ['jshint','concat:jsConcat','uglify']        
    },
    vendorCss: {
        files: ['content/themes/default/vendor/**/*.min.css', '!content/themes/default/vendor/vendor.min.css'],
      tasks: ['concat:vendorCssConcat']   
    },
    vendorJs: {
        files: ['content/themes/default/vendor/**/*.min.js', '!content/themes/default/vendor/vendor.min.js'],
      tasks: ['concat:vendorJsConcat']   
    }
};
