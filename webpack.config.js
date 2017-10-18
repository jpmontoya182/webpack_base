const path = require('path');

// entry, ouput, loaders and plugins
module.exports = {
    entry : {
        script : './src/uno.js'
    },
    output: {
        path : path.resolve(__dirname, 'dist'), 
        filename : '[name].bundle.js'
    }
}