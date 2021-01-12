module.experts = {
    globalDirectory: './',
    globalPatterns: [
        '**/*.{html,json,js,css,woff}'
    ],
    swDest: './sw.js',
    runtimeCaching: [{
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'NetworkFirst',
        option: {
            expiration: {
                maxEntries: 10,
            },
        },
    }],
};