'use strict';

module.exports = function (grunt) {

    // Load plugin installed with "npm i grunt-contrib-uglify grunt-contrib-clean --save-dev"
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Initialize Grunt configuration and setup tasks
    grunt.initConfig({
        conf: grunt.file.readJSON('config.json'),
        clean: {
            dest: '<%= conf.destDir %>'
        },
        uglify: {
            options: {
                sourceMap: false,
                beautify: true
            },
            oneFileFromAll: {
                files: {
                    '<%= conf.destDir %>/oneFileFromAll/lib.min.js': ['lib/**/*.js']
                }
            },
            manyDifferentFiles: {
                files: {
                    // config below will create one file from all files, expect exclude.js file
                    '<%= conf.destDir %>/manyDifferentFiles/lib.min.js' : ['lib/**/*.js', '!lib/exclude.js'],
                    // config bellow will create one file from all files in core dir, and one level deep folders
                    // so for example file from deeper dir will not be included
                    '<%= conf.destDir %>/manyDifferentFiles/lib-core.min.js': ['lib/core/{,*/}*.js']
                }
            },
            oneFileWithSourceMap: {
                options: {
                    sourceMap: true
                },
                files: {
                    '<%= conf.destDir %>/libraryWithSourceMap/lib.min.js': ['lib/**/*.js']
                }
            },
            separateFiles: {
                expand: true,
                cwd: 'lib/',
                src: ['**/*.js'],
                dest: '<%= conf.destDir %>/separateFiles/',
                ext: '.min.js'
            }
        }
    });

    grunt.registerTask('default', ['clean', 'uglify']);

};
