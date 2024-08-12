const withMT = require("@material-tailwind/html/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/app/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          'axiforma-normal-100',
          'axiforma-normal-100-italic',
          'axiforma-normal-300',
          'axiforma-normal-300-italic',
          'axiforma-book-normal',
          'axiforma-book-italic',
          'axiforma-regular',
          'axiforma-italic',
          'axiforma-medium',
          'axiforma-medium-italic',
          'axiforma-semibold',
          'axiforma-semibold-italic',
          'axiforma-bold',
          'axiforma-bold-italic'
        ]
      },
      colors:{
        primary:{
          black: '#000',
          dark: '#33363F',
          'purple-icon': '#9C94EA',
          'purple-icon-dark': '#5E57A6',
          info: '#EAE9FA',
          info2: '#D8D6F5',
          info3: '#B9B6EB',
          info4: '#9C99DC',
          info5: '#7D79B6',
          info6: '#686593',
          info7: '#9747FF',
          info8: '#51258A',
          'bar-purple': '#804AF2'
        },
        secondary:{
          default: '#4D3F7B',
          light: '#fff',
          'light-hover': '#5E57A6',
          'gray-notif': '#EFEFEF',
          background: '#F6F6F6'
        },
        neutral:{
          default: '#8B8B8B',
          dark: '#B4B4B4',
          'bar-gray': '#D7DDFF',
          stroke: '#EAE5E5',
          table: '#9A9292'
        },
        error:{
          default: '#FF0000'
        },
        success: {
          default: '#0ABD47',
          currency: '#0ABD47'
        }
      }
    },
  },
  plugins: [],
});

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,js}",
//     "./src/app/**/*.{html,js}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }