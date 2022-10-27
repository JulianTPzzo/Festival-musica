const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {

    src('src/scss/**/*.scss') //Identificar archivos de SASS
        .pipe( sass() ) //Compilarlo
        .pipe( dest("build/css")) //Almacenarlo en el disco duro

    done(); //call back que avisa a gulp que llegamos al final
}

function dev( done ) {

    watch('src/scss/**/*.scss', css)

    done();
}

exports.css = css;
exports.dev = dev;

