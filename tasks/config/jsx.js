module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-react');
  grunt.config.set('react', {
    dynamic_mappings: {
      files: [
        {
          expand: true,
          cwd: '.tmp/public/js',
          src: ['**/*.jsx'],
          dest: '.tmp/public/js',
          ext: '.js'
        }
      ]
    }
  });
};