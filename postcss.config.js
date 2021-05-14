const rucksack = require('rucksack-css');

module.exports = {
  plugins: [
    rucksack(),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
