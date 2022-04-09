const boostrap = require('./bootstrap');
const extendFileUpload = require('./extensions/extendFileUpload');

module.exports = {
  register({ strapi }) {
    extendFileUpload.generatePlaceholder(strapi);
  },

  async bootstrap() {
    await boostrap();
  },
};
