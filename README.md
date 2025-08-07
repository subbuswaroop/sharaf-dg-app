# Application

A full-stack ecommerce application built with React.js, Tailwind CSS, Node.js, and MySQL. Features include product listings, blog posts, customer testimonials, and shopping cart functionality.

## 🚀 Features

- **Shopping Cart**: Add/remove items with quantity management
- **Blog System**: Read articles and blog posts
- **Testimonials**: Customer reviews and ratings
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **RESTful API**: Well-structured backend with proper error handling

## 🛠️ Tech Stack

### Frontend

- React.js 18+
- Tailwind CSS
- React Router DOM
- Vite (build tool)
- Lucide React (icons)

### Backend

- Node.js
- Express.js
- MySQL with mysql2
- CORS
- Helmet (security)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MySQL** (v8.0 or higher)
- **npm** or **yarn**

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd assessment-sharaf-dg
```

### 2. Install dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
cd ..
```

### 3. Database Setup

1. **Start MySQL server** and create a new database:

   ```sql
   CREATE DATABASE ecommerce_db;
   ```

2. **Configure environment variables**:

   - Copy `server/.env` and update the database credentials:

   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=ecommerce_db
   ```

3. **Run the database setup script**:
   ```bash
   npm run setup-db
   ```
   This will create all necessary tables and insert sample data.

### 4. Start the Application

Run both frontend and backend concurrently:

```bash
npm run dev
```

Or run them separately:

**Backend (Port 3334):**

```bash
npm run server
```

**Frontend (Port 3000):**

```bash
npm run client
```

## 📁 Project Structure

```
assessment-sharaf-dg/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context for state management
│   │   └── ...
│   ├── public/
│   └── package.json
├── server/                # Node.js backend
│   ├── config/           # Database configuration
│   ├── routes/           # API route handlers
│   ├── scripts/          # Database setup scripts
│   └── package.json
├── .github/              # GitHub configurations
└── package.json          # Root package.json
```

## 🌐 API Endpoints

### Products

- `GET /api/products` - Get all products (with filters)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product

### Blog

- `GET /api/blog` - Get all blog posts

### Testimonials

- `GET /api/testimonials` - Get all approved testimonials

## 🗄️ Database Schema

### Other Tables

- `blog_posts` - Blog articles and content
- `testimonials` - Customer reviews
- `users` - User accounts (simplified)
- `cart_items` - Shopping cart persistence

## 🎨 Frontend Components

### Key Components

- **Header**: Navigation with cart indicator
- **ProductCard**: Reusable product display component
- **Footer**: Site footer with links
- **CartContext**: Global cart state management

### Pages

- **Home**: Hero section, featured products, testimonials
- **Products**: Product catalog with search and filters
- **ProductDetail**: Individual product pages
- **Cart**: Shopping cart management
- **Blog**: Blog post listings
- **BlogPost**: Individual blog articles

## 🔄 Cart Functionality

The shopping cart features:

- Add/remove products
- Quantity management
- Local storage persistence
- Real-time total calculation
- Stock validation

## 📱 Responsive Design

Built with mobile-first approach using Tailwind CSS:

- Responsive grid layouts
- Mobile navigation
- Optimized images

## 🔧 Development

### Available Scripts

**Root:**

- `npm run setup-db` - Setup database

**Client:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Server:**

- `npm run dev` - Start with nodemon
- `npm start` - Start production server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
