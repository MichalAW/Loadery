rules: [{
        test: /\.js$/,
        loader: "babel-loader"
    },
    {
        test: /\.css$/,
        use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }
        ]
    }
]