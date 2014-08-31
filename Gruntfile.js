module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'blogengine/static/bower_components/bootstrap/dist/css/bootstrap.css',
                    'blogengine/static/bower_components/bootstrap/dist/css/bootstrap-theme.css',
                    'blogengine/static/css/code.css',
                    'blogengine/static/css/main.css',
                ],
                dest: 'blogengine/static/css/style.css'
            }
        },
        uglify: {
            dist: {
                src: [
                    'blogengine/static/bower_components/jquery/jquery.js',
                    'blogengine/static/bower_components/bootstrap/dist/js/bootstrap.js'
                ],
                dest: 'blogengine/static/js/all.min.js'
            }
        },
        cssmin: {
            dist: {
                src: 'blogengine/static/css/style.css',
                dest: 'blogengine/static/css/style.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
