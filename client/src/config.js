const configs = {
  development: {
    SERVER_URI: 'http://localhost:5000',
  },
  production: {
    SERVER_URI: '',
  },
};

module.exports = configs[process.env.NODE_ENV];