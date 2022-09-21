const config = require('config')

module.exports = {
    server : config.get("server"),
    apis: config.get("apis")
}
    


