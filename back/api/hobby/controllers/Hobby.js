'use strict';

/**
 * Hobby.js controller
 *
 * @description: A set of functions called "actions" for managing `Hobby`.
 */

module.exports = {

  /**
   * Retrieve hobby records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.hobby.search(ctx.query);
    } else {
      return strapi.services.hobby.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a hobby record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.hobby.fetch(ctx.params);
  },

  /**
   * Count hobby records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hobby.count(ctx.query);
  },

  /**
   * Create a/an hobby record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hobby.add(ctx.request.body);
  },

  /**
   * Update a/an hobby record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hobby.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hobby record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hobby.remove(ctx.params);
  }
};
