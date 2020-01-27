module.exports = {
    target: {
        files: [{
          expand: true,
          cwd: 'content/themes/default/site/css',
          src: ['*.css', '!*.min.css'],
          dest: 'content/themes/default/site/css',
          ext: '.min.css'
        }]
    }
};