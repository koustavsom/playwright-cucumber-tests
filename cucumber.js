module.exports = {
  default: {
    require: [
      'ts-node/register',
      './path/to/step_definitions/**/*.ts'
    ],
    format: 'json:.report/json/results.json',
    'publish-quiet': true,
    'tags': '@regression',
  }
};