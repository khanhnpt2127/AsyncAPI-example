const streetlights = module.exports = {};

/**
 * Inform about environmental lighting conditions for a
 * particular streetlight.
 *
 * @param {Object} options
 * @param {Object} options.message
 * @param {Integer} options.message.payload.lumens - Light intensity measured in lumens.
 * @param {String} options.message.payload.sentAt - Date and time when the message was sent.
 */
streetlights.onStreetlightIdLightingMeasured = async ({message}) => {
  // Implement your business logic here...
};

