const mysql = require('mysql2/promise')
require('dotenv').config()

const setupDatabase = async () => {
  let connection

  try {
    // Create connection without specifying database
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || ''
    })

    console.log('✅ Connected to MySQL server')

    // Create database if it doesn't exist
    const dbName = process.env.DB_NAME || 'sharaf_dg_subbu_db'
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`)
    console.log(`✅ Database '${dbName}' created or already exists`)

    // Use the database
    await connection.query(`USE ${dbName}`)

    // Create tables
    console.log('📦 Creating tables...')

        // Products table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        stock INT DEFAULT 0,
        category VARCHAR(100),
        image VARCHAR(500),
        featured BOOLEAN DEFAULT FALSE,
        rating DECIMAL(3, 2) DEFAULT 0,
        reviews_count INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    console.log('✅ Products table created')

    // Blog posts table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content LONGTEXT NOT NULL,
        excerpt TEXT,
        author VARCHAR(100) NOT NULL,
        image VARCHAR(500),
        published BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    console.log('✅ Blog posts table created')

    // Testimonials table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        title TEXT NOT NULL,
        text TEXT NOT NULL,
        rating INT NOT NULL,
        email VARCHAR(255),
        approved BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    console.log('✅ Testimonials table created')

    // Users table (simplified for demo)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(100),
        password_hash VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    console.log('✅ Users table created')

    // Cart items table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS cart_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        product_id INT NOT NULL,
        quantity INT DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `)
    console.log('✅ Cart items table created')

    // Blog posts table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content LONGTEXT NOT NULL,
        excerpt TEXT,
        author VARCHAR(100) NOT NULL,
        image VARCHAR(500),
        published BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    console.log('✅ Blog posts table created')

    // Testimonials table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        text TEXT NOT NULL,
        rating INT NOT NULL,
        email VARCHAR(255),
        approved BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    console.log('✅ Testimonials table created')

    // Users table (simplified for demo)
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(100),
        password_hash VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    console.log('✅ Users table created')

    // Cart items table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS cart_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        product_id INT NOT NULL,
        quantity INT DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `)
    console.log('✅ Cart items table created')

    // Insert sample data
    console.log('📊 Inserting sample data...')

    // Sample products
    const products = [
      ['X5 Extreme Body Lotion', 'Test Description', 30000.00, 15, 'electronics', null, true, 4.5, 127],
      ['AHA Face Toner', 'Test Description', 60000.00, 8, 'electronics', null, true, 4.3, 89],
      ['Anti Strecthmark Oil', 'Test Description', 70000.99, 25, 'accessories', null, true, 4.7, 203],
      ['Acne Serum', 'Test Description', 30000.00, 30, 'electronics', null, false, 4.2, 156],
      ['Luminous Body Lotion', 'Test Description', 30000.00, 50, 'accessories', null, false, 4.0, 78],
      ['Skin Glow Moisturizing Lotion', 'Test Description', 30000.00, 12, 'electronics', null, false, 4.6, 234]
    ]

    for (const product of products) {
      await connection.query(
        'INSERT INTO products (name, description, price, stock, category, image, featured, rating, reviews_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        product
      )
    }
    console.log('✅ Sample products inserted')

    // Sample blog posts
    const blogPosts = [
      [
        '10 Must-Have Tech Gadgets for 2025',
        '<p>Technology continues to evolve at a rapid pace, and 2025 is shaping up to be an exciting year for tech enthusiasts. From revolutionary AI-powered devices to sustainable gadgets that help reduce our environmental footprint, this year\'s must-have tech items promise to transform how we work, play, and live.</p><h2>1. Smart Glasses with AR Integration</h2><p>The latest smart glasses finally deliver on the promise of seamless augmented reality integration. These lightweight devices overlay digital information onto the real world, making them perfect for navigation, productivity, and entertainment.</p>',
        'Discover the latest technology trends and gadgets that will revolutionize your daily life.',
        'John Smith',
        null,
        true
      ],
      [
        'How to Choose the Perfect Headphones',
        '<p>Finding the right headphones can be overwhelming with so many options available. This comprehensive guide will help you understand the key factors to consider when making your decision.</p><h2>Consider Your Use Case</h2><p>Are you using them for commuting, working out, or professional audio work? Different scenarios require different features.</p>',
        'A comprehensive guide to finding headphones that match your lifestyle and budget.',
        'Sarah Johnson',
        null,
        true
      ],
      [
        'The Rise of Smart Home Technology',
        '<p>Smart home devices are becoming increasingly sophisticated and affordable. From voice assistants to automated lighting systems, these technologies are changing how we interact with our living spaces.</p><h2>Getting Started</h2><p>Begin with a few key devices and gradually expand your smart home ecosystem.</p>',
        'Explore how smart home devices are changing the way we live and interact with our homes.',
        'Mike Chen',
        null,
        true
      ]
    ]

    for (const post of blogPosts) {
      await connection.query(
        'INSERT INTO blog_posts (title, content, excerpt, author, image, published) VALUES (?, ?, ?, ?, ?, ?)',
        post
      )
    }
    console.log('✅ Sample blog posts inserted')

    // Sample testimonials
    const testimonials = [
      ['Lisa', '2 weeks of using Glow Serum', 'After 2 weeks of using Xtragleam, my skin has never felt smoother. Thank you!', 5, 'lisa@example.com', true],
      ['Emma L', 'Game Changer', 'The Glow Serum is a game-changer. My dark spots faded within weeks, and my skin feels so hydrated!', 5, 'mike@example.com', true],
      ['Sarah A', 'More Confident', 'I have struggled with acne for years, but Xtragleam changed everything! My skin is glowing, and I have never felt more confident.', 4, 'emma@example.com', true],
      ['Sarah A', 'More Confident', 'I have struggled with acne for years, but Xtragleam changed everything! My skin is glowing, and I have never felt more confident.', 5, 'james@example.com', true],
      ['Dr. Jane O., Dermatologist', 'Dermatologist Recommendation', 'As a dermatologist, I recommend Xtragleam to my clients for its effective, natural ingredients.', 5, 'lisa@example.com', true],
      ['SkincareGuru, Beauty Influencer', 'Beauty Influencer', 'Xtragleam is my go-to for glowing skin before events!', 4, 'lisa@example.com', true]
    ]

    for (const testimonial of testimonials) {
      await connection.query(
        'INSERT INTO testimonials (name, title, text, rating, email, approved) VALUES (?, ?, ?, ?, ?, ?)',
        testimonial
      )
    }
    console.log('✅ Sample testimonials inserted')

    // Create a demo user
    await connection.query(
      'INSERT INTO users (email, name) VALUES (?, ?)',
      ['demo@example.com', 'Demo User']
    )
    console.log('✅ Demo user created')

    console.log('\n🎉 Database setup completed successfully!')
    console.log('\n📋 Summary:')
    console.log('- Database created: ' + dbName)
    console.log('- Tables created: products, blog_posts, testimonials, users, cart_items')
    console.log('- Sample data inserted for all tables')
    console.log('\n🚀 You can now start the server!')

  } catch (error) {
    console.error('❌ Error setting up database:', error.message)
    process.exit(1)
  } finally {
    if (connection) {
      await connection.end()
    }
  }
}

// Run the setup
setupDatabase()
