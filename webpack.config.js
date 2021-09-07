const path = require("path")

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
        scss: {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "scss-loader",
                    options: {
                        import: [
                            path.resolve(__dirname, 'src/Common/Styles/variables.scss'),
                        ],
                    }
                },
            ],
        },
    }

    if (env === 'production') {
        modules.scss.use.splice(2, 0, { loader: "scss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            App: path.resolve(__dirname, 'src/App/'),
            Pages: path.resolve(__dirname, 'src/Pages/'),
        },
    }

    return {
        modules,
        resolve,
    }
}