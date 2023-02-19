const withImages = require("next-images");
module.exports = withImages({
  inlineImageLimit: false,
  images: {
    disableStaticImages: true,
  },
});
