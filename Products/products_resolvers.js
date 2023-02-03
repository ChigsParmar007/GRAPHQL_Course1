const productModel = require('./products_model')

module.exports = {
    Query: {
        products: () => {
            return productModel.getAllProducts()
        },
        productsByPrice: (__, args) => {
            return productModel.getProductByPrice(args.min, args.max)
        },
        product: (__, args) => {
            return productModel.getProductById(args.id)
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return productModel.addNewProduct(args.id, args.description, args.price)
        },
        addNewProductReview: (__, args) => {
            return productModel.addNewProductReview(args.id, args.rating, args.comment)
        }
    }
}