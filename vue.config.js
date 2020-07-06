const path = require("path");
module.exports = {
    chainWebpack : config => {
        config.resolve.alias
        .set("@", path.resolve(__dirname, "./src/components/"))
        .set("assets", path.resolve(__dirname, "./src/assets/"))
        .set("views", path.resolve(__dirname, "./src/views/"))
    }
}