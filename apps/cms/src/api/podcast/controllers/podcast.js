/**
 *  podcast controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::podcast.podcast', ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {};
    query.filters.slug = { $eq: slug };
    const entity = await strapi.service('api::podcast.podcast').find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  },
}));
