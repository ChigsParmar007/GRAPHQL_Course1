const products = [
    {
      id: 'redshoe',
      description:'Red Shoe',
      price: 598,
      reviews: []
    },
    {
      id: 'bluejean',
      description: 'Blue Jeans',
      price: 499.99,
      reviews: []
    }
]

const getAllProducts = () => {
    return products
}

const getProductByPrice = (min, max) => {
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    })
}

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [] 
  }
  products.push(newProduct)
  return newProduct
}

const getProductById = (id) => {
    return products.find((product) => {
        return product.id === id
    })
}

const addNewProductReview = (id, rating, comment) => {
  const matchedProduct = getProductById(id)

  if(matchedProduct) {
    const newProductReview = {
      rating,
      comment
    }
    matchedProduct.reviews.push(newProductReview)
    return newProductReview
  } 
  return null
}

module.exports = { getAllProducts, getProductByPrice, getProductById, addNewProduct, addNewProductReview }