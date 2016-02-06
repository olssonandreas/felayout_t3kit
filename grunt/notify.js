module.exports = {
    server: {
        options: {
            title: 'Server is ready',
            message: 'http://localhost:<%= connect.options.port %>'
        }
    },
    site: {
        options: {
            message: 'Static site successfully updated'
        }
    },
    big: {
        options: {
            message: 'BIG branch successfully updated'
        }
    },
    small: {
        options: {
            message: 'SMALL branch successfully updated'
        }
    }
};