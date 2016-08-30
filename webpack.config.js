const path= require('path');
module.exports={
    entry: [
        
        "./app/index.js"
        ],
    output:{
        path: path.join(__dirname), // if there is build/index.html put here path.join(__dirname, 'build')
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {
                test:/\.jsx?$/,
               loader: 'babel-loader?presets[]=es2015,presets[]=react',
                exclude: /node_modules/
            }    
        ]
    },
    devServer: {
        contentBase: './'// if there is build/index.html put here './build'
    }
};