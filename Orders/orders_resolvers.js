const orderModel = require('./orders_model')

module.exports = {
    Query: {
        orders: () => {
            return orderModel.getAllOrders()
        }
    }
}