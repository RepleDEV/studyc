import type { GatsbyNode } from "gatsby";

// Buffer undefined workaround: https://stackoverflow.com/a/68723223/13160047
module.exports = {
    onPreInit() {
        console.log(require)
    },
    onCreateWebpackConfig({
        stage,
        rules,
        loaders,
        plugins,
        actions,
    }) {
        actions.setWebpackConfig({
            plugins: [
                plugins.provide({
                    Buffer: ["buffer", "Buffer"]
                }),
                plugins.ignore({
                    resourceRegExp: /canvas/,
                    contextRegExp: /jsdom$/
                })
            ],
        });
    },
} as GatsbyNode;