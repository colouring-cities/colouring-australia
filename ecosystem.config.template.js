// Template for production ecosystem file

// Copy this file and edit to set up pm2 config
// DO NOT COMMIT details to this file (publicly visible)
// See https://pm2.io/doc/en/runtime/guide/ecosystem-file/ for docs
module.exports = {
    apps: [
        {
            name: "colouringlondon",
            script: "./app/build/server.js",
            instances: 2,
            env: {
                NODE_ENV: "production",
                PGHOST: "localhost",
                PGPORT: 5432,
                PGDATABASE: "colouringlondondb",
                PGUSER: "appusername",
                PGPASSWORD: "longsecurerandompassword",
                APP_COOKIE_SECRET: "longrandomsecret",
                TILECACHE_PATH: "/home/alireza/tile-cache",
                MAIL_SERVER_HOST: "mail.privateemail.com",
                MAIL_SERVER_PORT: 587,
                MAIL_SERVER_USER: "admin@valueaustralia.dev",
                MAIL_SERVER_PASSWORD: "valueaustralia_987!",
                WEBAPP_ORIGIN: "https://www.ahdap.dev/",
                EXTRACTS_DIRECTORY:"/var/www/www.ahdap.dev/downloads"
            }
        }
    ]
}
