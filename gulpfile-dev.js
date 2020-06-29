const {task,src,dest,watch,series,parallel} = require('gulp');
const load = require('gulp-load-plugins')();
const del = require('del');

// 删除dist目录的内容
task('del',async ()=>{
    await del('./dist');
})

// 处理html
task('html',async ()=>{
    src('./src/*.html')
    .pipe(dest('./dist'))
    .pipe(load.connect.reload())//刷新
});

// 处理img
task('images',async ()=>{
    src('./src/images/**/*.*')
    .pipe(dest('./dist/images'))
    .pipe(load.connect.reload())//刷新
});

// 处理字体文件
task('iconfont',async ()=>{
    src('./src/iconfont/*.*')
    .pipe(dest('./dist/iconfont'))
    .pipe(load.connect.reload())//刷新
});

// 处理javascript
task('script',async ()=>{
    src('./src/script/*.js')
    .pipe(load.babel({ presets: ['@babel/preset-env']}))//转ES5
    .pipe(dest('./dist/script'))
    .pipe(load.connect.reload())//刷新
})

// 编译sass文件，转成纯css
task('sass',async ()=>{
    src('./src/sass/*.scss')
    .pipe(load.sass())// sass编译成css
    .pipe(dest('./dist/css'))
    .pipe(load.connect.reload())//刷新
})

// web服务器
task('connect',async ()=>{
    load.connect.server({
        root: './dist',
        livereload: true,
        port: 3000
    });
})

task('watch',async ()=>{
    watch('./src/*.html',series('html'));
    watch('./src/images/*.*',series('images'));
    watch('./src/iconfont/*.*',series('iconfont'));
    watch('./src/script/*.js',series('script'));
    watch('./src/sass/*.scss',series('sass'));
})

// 构建并启动项目，开发版本
task('dev',series('del','html','images','iconfont','script','sass','connect','watch'));
