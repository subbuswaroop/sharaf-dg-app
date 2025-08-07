const express = require('express')
const router = express.Router()
const { executeQuery } = require('../config/database')

// Get all products
router.get('/', async (req, res) => {
  try {    
    let query = 'SELECT * FROM products WHERE 1=1'
    let params = []

    const products = await executeQuery(query, params)
    res.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).json({ error: 'Failed to fetch products' })
  }
})

// Get featured products
router.get('/featured', async (req, res) => {
  try {
    const products = await executeQuery(
      'SELECT * FROM products WHERE featured = 1 ORDER BY created_at DESC LIMIT 6'
    )
    res.json(products)
  } catch (error) {
    console.error('Error fetching featured products:', error)
    res.status(500).json({ error: 'Failed to fetch featured products' })
  }
})

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const products = await executeQuery(
      'SELECT * FROM products WHERE id = ?',
      [id]
    )
    
    if (products.length === 0) {
      return res.status(404).json({ error: 'Product not found' })
    }
    
    res.json(products[0])
  } catch (error) {
    console.error('Error fetching product:', error)
    res.status(500).json({ error: 'Failed to fetch product' })
  }
})

module.exports = router
