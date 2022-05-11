const path = require('path');//Inclut le module externe nommé path. Il sert à rendre les separateurs de fichiers compréhensibles (/ \ sous linux ou windows ...)

module.exports = {
    entry: './src/index.ts', //Fichier servant de point d'entrée
    output: {
        filename: 'app.bundle.js', //Nom du fichier de sortie
        path: path.resolve(__dirname, 'dist') //Ou sortira le fichier
    },
    module: { //Les loaders sont indiqués ici
        rules: [{test: /\.ts$/i, use: 'ts-loader'}]
    },
    resolve: { //Cherche automatiquement les extensions qu'on lui spécifie
        extensions:['.ts', '.js']
    },
    devtool: 'source-map', //Ajouter un source map
    mode: 'production' //2 modes par défaut : production et development
}


