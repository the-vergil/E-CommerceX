'use strict';

/**
 * user-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-email.user-email');
