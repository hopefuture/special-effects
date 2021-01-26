import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import zhHans from 'vuetify/src/locale/zh-Hans';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#2c68ff',
        secondary: colors.deepPurple.base,
        accent: colors.lightGreen.base,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.cyan.base,
        success: colors.green.base
      }
    }
  },
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  }
});
