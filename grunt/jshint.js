module.exports = {
    options: {
        ignores: ['content/themes/default/site/js/app/app.min.js']
    },
    beforeconcat: ['gruntfile.js', 'content/themes/default/site/js/app/**/*.js', '!content/themes/default/site/js/app/app.js'],
    afterconcat: ['content/themes/default/site/js/app.js']
};