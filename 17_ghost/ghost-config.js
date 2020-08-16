const path = require("path")

const config = {
  development: {
    url: "http://localhost:2368",
    database: {
      client: "mysql",
      connection: {
        host: "mysql",
        user: "root",
        password: "root",
        database: "ghost_db",
        charset: "utf_8"
      },
    },
    server: {
      host: "0.0.0.0",
      port: "2368"
    },
    paths: {
      contentPath: path.join(process.env.GHOST_CONTENT, "/")
    }
  }
}