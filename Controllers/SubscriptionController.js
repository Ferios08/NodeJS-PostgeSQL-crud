const subscriptionDao = require('../DAOs/SubscriptionDAO');
var subscriptionController = {
    addSubscription: addSubscription,
    findSubscriptions: findSubscriptions,
    findSubscriptionById: findSubscriptionById,
    findSubscriptionByEmail: findSubscriptionByEmail,
    updateSubscription: updateSubscription,
    deleteById: deleteById
}

function addSubscription(req, res) {
    let subscription = req.body;
    subscriptionDao.findByMail(req.body.email).
        then((data) => {
            if (data)


                res.json({ "exist": "true" });
            else {
                subscriptionDao.create(subscription).
                    then((data) => {
                        res.send(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        })
        .catch((error) => {
            console.log(error);
        });
}


function findSubscriptionById(req, res) {
    subscriptionDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findSubscriptionByEmail(req, res) {
    subscriptionDao.findByMail(req.body.email).
        then((data) => {
            if (data) res.send(true);
            else res.send(false);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    subscriptionDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Subscription deleted successfully",
                subscription: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateSubscription(req, res) {
    subscriptionDao.updateSubscription(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Subscription updated successfully",
                subscription: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findSubscriptions(req, res) {
    subscriptionDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = subscriptionController;