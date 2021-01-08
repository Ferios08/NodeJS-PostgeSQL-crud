
const Subscription = require('../models/Subscription');
var subscriptionDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateSubscription: updateSubscription
}

function findAll() {
    return Subscription.findAll();
}

function findById(id) {
    return Subscription.findByPk(id);
}

function deleteById(id) {
    return Subscription.destroy({ where: { id: id } });
}

function create(subscription) {
    var newSubscription = new Subscription(subscription);
    return newSubscription.save();
}

function updateSubscription(subscription, id) {
    var updateSubscription = {
        fullname: subscription.fullname,
        email: subscription.email,
        date:  subscription.date,

    };
    return Subscription.update(updateSubscription, { where: { id: id } });
}
module.exports = subscriptionDao;