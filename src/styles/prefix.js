var postcss = require('postcss-js')
var prefixer = postcss.sync([require('../../../../../Library/Caches/typescript/2.9/node_modules/@types/autoprefixer')])
prefixer({ flexbox: true}); ////=> { display: ['-webkit-box', '-webkit-flex', '-ms-flexbox', 'flex'] }