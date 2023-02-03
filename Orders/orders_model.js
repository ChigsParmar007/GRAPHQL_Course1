const orders = [
    {
      date: '22-12-2022',
      subtotal: 598,
      items: [
        {
          product: {
            id: 'redshoe',
            description:'Ols Red Shoe',
            price: 299,
            reviews: [
              {
                rating: 4,
                comment: 'Great!'
              }
            ]
          },
          quantity: 2
        }
      ]
    }
]

const getAllOrders = () => {
    return orders
}

module.exports = { getAllOrders }