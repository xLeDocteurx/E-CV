'use strict';

/**
 * Medium.js controller
 *
 * @description: A set of functions called "actions" for managing `Medium`.
 */

module.exports = {

  /**
   * Retrieve medium records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.medium.search(ctx.query);
    } else {
      return strapi.services.medium.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a medium record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.medium.fetch(ctx.params);
  },

  /**
   * Count medium records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.medium.count(ctx.query);
  },

  /**
   * Create a/an medium record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.medium.add(ctx.request.body);
  },

  /**
   * Update a/an medium record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.medium.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an medium record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.medium.remove(ctx.params);
  }
};
