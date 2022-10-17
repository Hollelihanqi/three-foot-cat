// import "@/assets/css/fontawesome6/css/all.min.css"
import "vuetify/lib/styles/main.sass"
import { createVuetify } from "vuetify"
import * as components from "vuetify/lib/components/index"
import * as directives from "vuetify/lib/directives/index"
// import { aliases, fa } from "vuetify/lib/iconsets/fa"
import { aliases, mdi } from "vuetify/iconsets/mdi"
export const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
  },
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#41b883",
          background: "#35495e",
          error: "#d63031",
          info: "#0984e3",
          secondary: "#fdcb6e",
          success: "#00cec9",
          surface: "#6c5ce7",
          warning: "#2d3436"
        },
        dark: false,
        variables: {}
      }
    }
  }
})
