import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    theme: {
        dark: true,
        options: { customProperties: true },
        themes: {
            dark: {
                dark: '##212a35',
                primary: {
                    lighten1: '#4dcfff',
                    base: '#d11d49',
                    darken1: '#212a35',
                    darken2: '#27323f',
                },
                secondary: {
                    base: '#607180',
                    lighten1: '#a705ce',
                    lighten2: '#e99cfc',
                },

                success: {
                    base: '#52ce47'
                },

                warning: {
                    base: '#ff8926'
                },
            }
        },
    },
});
