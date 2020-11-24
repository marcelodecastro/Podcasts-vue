// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#5cd0ff',
                secondary: '#b0bec5',
                anchor: '#8c9eff',
            },
            dark: {
                primary: colors.blue.lighten3,
            },
        },
        icons: {
            iconfont: 'fa',
        },
    },
})

export default vuetify