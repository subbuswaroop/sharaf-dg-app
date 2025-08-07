const express = require('express')
const router = express.Router()
const { executeQuery } = require('../config/database')

// Get all blog posts
router.get('/', async (req, res) => {
  try {    
    let query = 'SELECT * FROM blog_posts WHERE published = 1 ORDER BY created_at DESC'
    let params = []

    const posts = await executeQuery(query, params)
    res.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    res.status(500).json({ error: 'Failed to fetch blog posts' })
  }
})

// Get blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const posts = await executeQuery(
      'SELECT * FROM blog_posts WHERE id = ? AND published = 1',
      [id]
    )
    
    if (posts.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' })
    }
    
    res.json(posts[0])
  } catch (error) {
    console.error('Error fetching blog post:', error)
    res.status(500).json({ error: 'Failed to fetch blog post' })
  }
})

module.exports = router
