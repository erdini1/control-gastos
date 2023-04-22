/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],  //Esto quiere decir que va a aplicar a todos los archivos que esten dentro de src y que poseean la extensión jsx porque son los componentes de react que son los que quiero donde se apliquen
  theme: {
    extend: {},
  },
  plugins: [],
}

