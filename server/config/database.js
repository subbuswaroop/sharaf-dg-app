const mysql = require('mysql2/promise')

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ecommerce_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}

// Create connection pool
const pool = mysql.createPool(dbConfig)

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection()
    console.log('✅ Database connected successfully')
    connection.release()
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    return false
  }
}

// Execute query helper function
const executeQuery = async (query, params = []) => {
  try {
    const [rows] = await pool.execute(query, params)
    return rows
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}

// Get database connection
const getConnection = async () => {
  return await pool.getConnection()
}

module.exports = {
  pool,
  testConnection,
  executeQuery,
  getConnection
}
