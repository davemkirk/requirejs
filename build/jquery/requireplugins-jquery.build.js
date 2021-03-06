{
    baseUrl: ".",
    out: "dist/requireplugins-jquery.js",
    optimize: "none",

    include: ["require/i18n", "require/text", "require/jsonp", "require/order", "jquery-1.4.2"],
    includeRequire: true,
    skipModuleInsertion: true,
    pragmas: {
        jquery: true,
        requireExcludeModify: true,
        requireExcludePageLoad: true,
        requireExcludeContext: true
    }
}
