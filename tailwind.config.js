const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    colors: {
      blue: {
       lightest: '#425075ff',
        lighter: '#394564ff',
        light: '#2F3953ff',
        default: '#262E42ff',
        dark: '#1D2230ff',
        darker: '#13171Fff',
        darkest: '#0A0B0Eff',
      },
      gray: {
        lightest: '#86929Cff',
         lighter: '#77828Eff',
         light: '#697381ff',
         default: '#5A6373ff',
         dark: '#4B5365ff',
         darker: '#3D4458ff',
         darkest: '#2E344Aff',
       },
      green: {
        lightest: '#9DB04Aff',
         lighter: '#94A74Fff',
         light: '#8A9E54ff',
         default: '#819559ff',
         dark: '#788C5Eff',
         darker: '#6E8363ff',
         darkest: '#657A68ff',
       },
       white: {
        lightest: '#F7F0FFff',
         lighter: '#E7E3F5ff',
         light: '#D7D5EAff',
         default: '#C7C8E0ff',
         dark: '#B7BAD5ff',
         darker: '#A7ADCBff',
         darkest: '#979FC0ff',
       },
    },
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function({addComponents}){
      const greenButtons = {
        '.btn-green': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#9db04a',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#8A9E54'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-green-darken1': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#94A74Fff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#819559ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-green-darken2': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#8A9E54ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#788C5Eff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-green-darken3': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#819559ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#6E8363ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-green-darken4': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#788C5Eff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#657A68ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
      }

      const blueButtons = {
        '.btn-blue': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#425075ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2F3953ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-blue-darken1': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#394564ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#262E42ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-blue-darken2': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#2F3953ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#1D2230ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-blue-darken3': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#262E42ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#13171Fff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-blue-darken4': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#1D2230ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0A0B0Eff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
      }

      const grayButtons = {
        '.btn-gray': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#86929Cff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#697381ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-gray-darken1': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#77828Eff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#5A6373ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-gray-darken2': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#697381ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#4B5365ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-gray-darken3': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#5A6373ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#3D4458ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-gray-darken4': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#4B5365ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2E344Aff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
      }

      const whiteButtons = {
        '.btn-white': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#F7F0FFff',
          color: '#788592ff',
          '&:hover': {
            backgroundColor: '#D7D5EAff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-white-darken1': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#E7E3F5ff',
          color: '#788592ff',
          '&:hover': {
            backgroundColor: '#979FC0ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-white-darken2': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#D7D5EAff',
          color: '#788592ff',
          '&:hover': {
            backgroundColor: '#B7BAD5ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-white-darken3': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#C7C8E0ff',
          color: '#788592ff',
          '&:hover': {
            backgroundColor: '#A7ADCBff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        },
        '.btn-white-darken4': {
          margin: '2px',
          padding: '.5rem 1rem',
          border: '1px solid black',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#B7BAD5ff',
          color: '#788592ff',
          '&:hover': {
            backgroundColor: '#979FC0ff'
          },
          '&:focus': {
            border: '2px solid black'
          }
        }
      }

      addComponents(greenButtons);
      addComponents(blueButtons);
      addComponents(grayButtons);
      addComponents(whiteButtons);


      const blueBackgrounds = {
        '.back-blue': {
          backgroundColor: '#425075ff',
        },
        '.back-blue-darken1': {
          backgroundColor: '#394564ff',
        },
        '.back-blue-darken2': {
          backgroundColor: '#2F3953ff',
        },
        '.back-blue-darken3': {
          backgroundColor: '#262E42ff',
        },
        '.back-blue-darken4': {
          backgroundColor: '#1D2230ff',
        },
      }

      const grayBackgrounds = {
        '.back-gray': {
          backgroundColor: '#86929Cff',
        },
        '.back-gray-darken1': {
          backgroundColor: '#77828Eff',
        },
        '.back-gray-darken2': {
          backgroundColor: '#697381ff',
        },
        '.back-gray-darken3': {
          backgroundColor: '#5A6373ff',
        },
        '.back-gray-darken4': {
          backgroundColor: '#4B5365ff',
        },
      }

      const greenBackgrounds = {
        '.back-green': {
          backgroundColor: '#9DB04Aff',
        },
        '.back-green-darken1': {
          backgroundColor: '#94A74Fff',
        },
        '.back-green-darken2': {
          backgroundColor: '#8A9E54ff',
        },
        '.back-green-darken3': {
          backgroundColor: '#819559ff',
        },
        '.back-green-darken4': {
          backgroundColor: '#788C5Eff',
        },
      }

      const whiteBackgrounds = {
        '.back-white': {
          backgroundColor: '#F7F0FFff',
        },
        '.back-white-darken1': {
          backgroundColor: '#E7E3F5ff',
        },
        '.back-white-darken2': {
          backgroundColor: '#D7D5EAff',
        },
        '.back-white-darken3': {
          backgroundColor: '#C7C8E0ff',
        },
        '.back-white-darken4': {
          backgroundColor: '#B7BAD5ff',
        },
      }
      addComponents(blueBackgrounds);
      addComponents(grayBackgrounds);
      addComponents(greenBackgrounds);
      addComponents(whiteBackgrounds);
    }),
     // ...
     require('tailwindcss'),
     require('autoprefixer'),
     // ...
  ],
}
