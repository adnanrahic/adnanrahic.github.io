var gulp = require('gulp');
var webserver = require('gulp-webserver');
var inject = require('gulp-inject');
var del = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var bytediff = require('gulp-bytediff');
var cleanCSS = require('gulp-clean-css');

var paths = {
	dev: 'dev',
	devHome: 'dev/homeComponent',
	devAbout: 'dev/aboutComponent',
	devContact: 'dev/contactComponent',
	devStory: 'dev/storyComponent',
	devAssets: 'dev/assets',
	index: 'src/index.html',
	src: 'src',
	appInit: [
		'src/app.module.js',
		'src/app.factory.js'
		],
	appConfig: [
		'src/app.run.js',
		'src/app.config.js'
		],
	home: [
		'src/homeComponent/home.routes.js',
		'src/homeComponent/home.factory.js',
		'src/homeComponent/**/*.js'
		],
	about: [
		'src/aboutComponent/about.routes.js',
		'src/aboutComponent/**/*.js'
		],
	portfolio: [
		'src/portfolioComponent/portfolio.routes.js',
		'src/portfolioComponent/**/*.js'
		],
	contact: [
		'src/contactComponent/contact.routes.js',
		'src/contactComponent/**/*.js'
		],
	story: [
		'src/storyComponent/story.routes.js',
		'src/storyComponent/story.factory.js',
		'src/storyComponent/**/*.js'
		],
  templates: ['src/**/*.html', '!src/index.html'],
	assets: 'src/assets/**/*',
	favicon: 'src/favicon.ico',
  dist: 'dist',
	distAssets: 'dist/assets'
}

paths.appSrc = paths.appInit
       .concat(paths.about)
       .concat(paths.portfolio)
       .concat(paths.contact)
       .concat(paths.story)
       .concat(paths.home)
       .concat(paths.appConfig);

gulp.task('dev', ['watch']);
gulp.task('watch', ['serve'], function () {
	gulp.watch(paths.appInit, ['copy']);
	gulp.watch(paths.appConfig, ['copy']);
	gulp.watch(paths.home, ['copy']);
	gulp.watch(paths.about, ['copy']);
	gulp.watch(paths.portfolio, ['copy']);
	gulp.watch(paths.contact, ['copy']);
	gulp.watch(paths.story, ['copy']);
	gulp.watch(paths.assets, ['copy']);
	gulp.watch(paths.templates, ['copy']);
	gulp.watch(paths.index, ['copy']);
});
gulp.task('serve', ['copy'], function () {
  return gulp.src(paths.dev)
    .pipe(webserver({
      port: 3000,
			livereload: true,
      fallback: 'index.html'
    }));
});
gulp.task('copy', function(){

	var appInit = gulp.src(paths.appInit).pipe(gulp.dest(paths.dev));
	var appConfig = gulp.src(paths.appConfig).pipe(gulp.dest(paths.dev));
	var home = gulp.src(paths.home).pipe(gulp.dest(paths.dev));
	var about = gulp.src(paths.about).pipe(gulp.dest(paths.dev));
	var portfolio = gulp.src(paths.portfolio).pipe(gulp.dest(paths.dev));
	var contact = gulp.src(paths.contact).pipe(gulp.dest(paths.dev));
	var story = gulp.src(paths.story).pipe(gulp.dest(paths.dev));
	var assets = gulp.src(paths.assets).pipe(gulp.dest(paths.devAssets));
	var templates = gulp.src(paths.templates).pipe(gulp.dest(paths.dev));
	var favicon = gulp.src(paths.favicon).pipe(gulp.dest(paths.dev));

	return gulp.src(paths.index)
				.pipe(gulp.dest(paths.dev))
				.pipe(inject(assets, {
					relative:true,
					name: 'assetsInject'
				}))
				.pipe(inject(appInit, {
					relative:true,
					name: 'appInitInject'
				}))
				.pipe(inject(home, {
					relative:true,
					name: 'homeInject'
				}))
				.pipe(inject(about, {
					relative:true,
					name: 'aboutInject'
				}))
				.pipe(inject(contact, {
					relative:true,
					name: 'contactInject'
				}))
				.pipe(inject(portfolio, {
					relative:true,
					name: 'portfolioInject'
				}))
				.pipe(inject(story, {
					relative:true,
					name: 'storyInject'
				}))
				.pipe(inject(appConfig, {
					relative:true,
					name: 'appConfigInject'
				}))
				.pipe(gulp.dest(paths.dev));
	
});

/**
 * serve the dist folder - simulate production server
 */
gulp.task('serve:dist', ['build'], function () {
  return gulp.src(paths.dist)
    .pipe(webserver({
      port: 3001,
      fallback: 'index.html'
    }));
});
/**
 * concat & minify app files
 */
gulp.task('build', function () {

	var favicon = gulp.src(paths.favicon).pipe(gulp.dest(paths.dist));
	var distAssets = gulp.src(paths.assets).pipe(gulp.dest(paths.distAssets));
	var distTemplates = gulp.src(paths.templates).pipe(gulp.dest(paths.dist));

  var dist = gulp.src(paths.appSrc)
		.pipe(sourcemaps.init())
		.pipe(concat('app.min.js'))
		.pipe(ngAnnotate())
		.pipe(bytediff.start())
		.pipe(uglify({
				mangle: true
		}))
		.pipe(bytediff.stop())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.dist));

  
  // need the index from the dist directory!!!!
  return gulp.src(paths.index)
		.pipe(gulp.dest(paths.dist))
		.pipe(inject(distAssets, {
				relative: true,
				empty: true,
				name: 'assetsInject'
		}))
		.pipe(inject(dist, {
				relative: true,
				empty: true
		}))
		.pipe(gulp.dest(paths.dist));

});

/**
 * serve src folder
 */
gulp.task('serve:src', ['inject'], function () {
  return gulp.src(paths.src)
    .pipe(webserver({
      port: 3000,
			livereload: true,
      fallback: 'index.html'
    }));
});

gulp.task('inject', function() {
	var assets = gulp.src(paths.assets);
	var templates = gulp.src(paths.templates);
	var favicon = gulp.src(paths.favicon);

	var appSrc = gulp.src(paths.appSrc);

	return gulp.src(paths.index)
				.pipe(inject(assets, {
					relative:true,
					empty:true
				}))
				.pipe(inject(appSrc, {
					relative:true,
					empty:true
				}))
				.pipe(gulp.dest(paths.src));
	
});

/**
 * clean tasks
 */
gulp.task('clean', function () {
  del([paths.dev, paths.dist]);
});
gulp.task('clean:dev', function () {
  del([paths.dev]);
});
gulp.task('clean:dist', function () {
  del([paths.dist]);
});