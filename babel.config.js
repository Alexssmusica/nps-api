module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { esmodules: true } }]
    ],
    plugins: [
        "babel-plugin-transform-typescript-metadata",
        ["@babel/plugin-transform-typescript"],
        ["@babel/plugin-proposal-decorators", { "legacy" : true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ],
}
