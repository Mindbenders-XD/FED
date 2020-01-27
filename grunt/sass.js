module.exports = {
    dist: {
      files: [{
        expand: true,
        cwd: 'content/themes/default/site/scss',
        src: ['*.scss'],
        dest: 'content/themes/default/site/css',
        ext: '.css'
      }],
      options: {
        sourcemap: 'none',
        noCache: true,
        update: true
      }
    }
};