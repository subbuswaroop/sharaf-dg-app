const express = require('express')
const router = express.Router()
const { executeQuery } = require('../config/database')

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const { limit } = req.query
    
    let query = 'SELECT * FROM testimonials WHERE approved = 1 ORDER BY created_at DESC'
    let params = []

    if (limit) {
      query += ' LIMIT ?'
      params.push(parseInt(limit))
    }

    const testimonials = await executeQuery(query, params)
    res.json(testimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    res.status(500).json({ error: 'Failed to fetch testimonials' })
  }
});

// Get testimonial by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const testimonials = await executeQuery(
      'SELECT * FROM testimonials WHERE id = ? AND approved = 1',
      [id]
    )
    
    if (testimonials.length === 0) {
      return res.status(404).json({ error: 'Testimonial not found' })
    }
    
    res.json(testimonials[0])
  } catch (error) {
    console.error('Error fetching testimonial:', error)
    res.status(500).json({ error: 'Failed to fetch testimonial' })
  }
});

module.exports = router
