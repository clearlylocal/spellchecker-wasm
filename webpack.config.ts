const path = require('path');

const umdOptions = {
    entry: './src/js/browser/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    target: "web",
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'lib/browser/'),
        filename: 'index.js',
        library: {
            name: 'spellchecker-wasm',
            type: 'umd',
        },
    },
    mode: 'production',
};

const esmOptions = {
    ...umdOptions,
    target: 'es2020',
    output: {
        ...umdOptions.output,
        filename: 'index.mjs',
        library: {
            type: 'module',
        },
    },
    experiments: {
        outputModule: true,
    },
};

module.exports = [umdOptions, esmOptions];
