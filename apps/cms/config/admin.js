module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5b7868b4d70b53e89f4c7c756fab3332'),
  },
});
