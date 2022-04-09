/* eslint-disable comma-dangle */
module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        xlarge: 2400,
        large: 1920,
        medium: 1000,
        small: 500,
        xsmall: 64,
      },
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),

        localServer: {
          maxage: 300000,
        },
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
      },
    },
  },
  seo: {
    enabled: true,
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
