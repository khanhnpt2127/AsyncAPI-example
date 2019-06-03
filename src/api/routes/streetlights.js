const router = require('hermesjs-router')();
const streetlights = require('../services/streetlights');

/**
 * Inform about environmental lighting conditions for a 
 * particular streetlight.
 */
router.use('smartylighting/streetlights/1/0/event/:streetlightId/lighting/measured', async (message, next) => {
  await streetlights.onStreetlightIdLightingMeasured({message});
  next();
});

module.exports = router;
