const configs = {
  development: {
    SERVER_URI: 'localhost:5000',
  },
  production: {
    SERVER_URI: 'my-exercise-record.herokuapp.com',
  },
};

module.exports = configs[process.env.NODE_ENV];