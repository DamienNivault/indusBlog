

var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('web/build/IndusBlog_vue/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build/IndusBlog_vue')

    // will create web/build/app.js and web/build/app.css
    .addEntry('app', './src/IndusBlogBundle/Resources/vue-app/index.js')

    // allow sass/scss files to be processed
    .enableSassLoader()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableVueLoader()

    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    // .enableBuildNotifications()

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()
    ;

// export the final configuration
module.exports = Encore.getWebpackConfig();



