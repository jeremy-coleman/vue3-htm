var gulp = require("gulp")
var concat = require("gulp-concat")

gulp.task("concat", () => {
  return gulp.src("src/temp/**/*.js").pipe(concat("_temp.js")).pipe(gulp.dest("temp"))
})
