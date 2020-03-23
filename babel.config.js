module.exports = function (api) {
    api.cache(true);

    const presets = [
        ['@babel/preset-env', {
            targets: {
                node: true,
            },
            modules: 'commonjs'
        }],
    ];

    const plugins = [];

    return {
        presets,
        plugins,
    };
}