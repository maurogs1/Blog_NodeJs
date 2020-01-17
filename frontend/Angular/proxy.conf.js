const PROXY_CONFIG = [
    {
        context: ['/curso'],
        target: ' http://localhost:3900/',
        secure: false,
        logLevel: 'debug',
        path: { '^/curso': ''}
    }

]

module.exports = PROXY_CONFIG;