/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          'primary': '#7D4FFE',
          'secondary': '#8A8D93',
          'on-secondary': '#fff',
          'success': '#56CA00',
          'info': '#16B1FF',
          'warning': '#FFB400',
          'error': '#FF4C51',
          'on-primary': '#FFFFFF',
          'on-success': '#FFFFFF',
          'on-warning': '#FFFFFF',
          'background': '#F4F5FA',
          'on-background': '#3A3541',
          'on-surface': '#3A3541',
          'grey-50': '#FAFAFA',
          'grey-100': '#F0F2F8',
          'grey-200': '#EEEEEE',
          'grey-300': '#E0E0E0',
          'grey-400': '#BDBDBD',
          'grey-500': '#9E9E9E',
          'grey-600': '#757575',
          'grey-700': '#616161',
          'grey-800': '#424242',
          'grey-900': '#212121',
          'perfect-scrollbar-thumb': '#DBDADE',
          'skin-bordered-background': '#fff',
          'skin-bordered-surface': '#fff',
        },
      },
    },
  },
});
