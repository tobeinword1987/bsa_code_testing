module.exports = function(grunt) {

    grunt.initConfig({
        browserify:{
            // just the app
            app: {
                src:'resources/assets/js/app/app.js',
                dest: 'public/js/app.js',
                options: {
                    debug: true,
                    extensions: ['.hbs'],
                    transform: ['hbsfy'],
                    // external: vendors
                }
            },
            vendors: {
                files: {
                    'public/js/vendors.js': []
                },
                options: {
                    // 'require': vendors
                }
            },
            //bundle all in one
            bundle:{
                src:'resources/assets/js/app/app.js',
                dest:'public/js/bundle.js',
                options:{
                    extensions:['.coffee','.hbs'],
                    transform:['coffeeify','hbsfy']
                }
            }
        },


        uglify:{
            bundle:{
                src:'public/js/bundle.js',
                dest:'public/js/bundle.js'
            }
        },

        watch:{
            options:{
                livereload:true
            },
            scripts:{
                files:['resources/assets/**/*.js'],
                tasks:['browserify:app']
            },
            styles:{
                files:['resources/assets/**/*.css'],
                tasks:['concat.css']
            }
        },

        concat:{
            options:{
                separator:'\n'
            },
            js:{
                src:['bower_components/moment/min/moment.min.js'],
                dest:'public/js/bower-vendors.js'
            },
            vendor_css:{
                src:[],
                dest:'public/css/vendor.css'
            },
            css:{
                src:['resources/assets/**/*.css'],
                dest:'public/css/style.css'
            }
        },

        jst: {
            compile: {
                options: {
                    processName: function(filePath) {
                        return filePath.replace(/^resources\/assets\/js\/templates\//, '').replace(/\.hbs$/, '');
                    }

                },
                files: {
                    'public/js/templates.js': ['resources/assets/js/app/templates/**/*.tpl']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-jst');

    grunt.registerTask('default', ['browserify']);
    grunt.registerTask('stage', ['browserify:app', 'browserify:vendors','browserify:bundle','concat']);
    grunt.registerTask('prod', ['browserify:bundle', 'uglify','concat']);
    grunt.registerTask('dev', ['stage', 'jst','watch']);

};