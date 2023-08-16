var config = {
    DATABASE_HOST: process.env.DATABASE_HOST?process.env.DATABASE_HOST:"challenge-db",
    DATABASE_NAME: process.env.DATABASE_NAME?process.env.DATABASE_NAME:"vuln_node_app_db",
    DATABASE_USER: process.env.DATABASE_USER?process.env.DATABASE_USER:"vulnnodeapp",
    DATABASE_PASS: process.env.DATABASE_PASS?process.env.DATABASE_PASS:"password",
}

module.exports = config;