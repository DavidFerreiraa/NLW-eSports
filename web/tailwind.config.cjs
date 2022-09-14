/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ //Selecione aqui o caminho dos arquivos os quais você manipulará com tailwindcss
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nlw-gradient": "linear-gradient(89.86deg, #9572FC , #43E7AD, #E1D55D)",
        "imgs-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
        galaxy: "url('/background-galaxy.png')"
      }
    },
  },
  plugins: [],
}
