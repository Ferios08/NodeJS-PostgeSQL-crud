const express = require('express');
const router = express.Router();
const subscriptionController = require('../Controllers/subscriptionController');

router.post('/', subscriptionController.addSubscription);
router.get('/', subscriptionController.findSubscriptions);
router.get('/:id', subscriptionController.findSubscriptionById);
router.put('/:id', subscriptionController.updateSubscription);
router.delete('/:id', subscriptionController.deleteById);

module.exports = router;