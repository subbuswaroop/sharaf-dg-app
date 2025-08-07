// Assets index for easy imports
import logoSvg from '../assets/icons/logo.svg'
import logoWhiteSvg from '../assets/icons/logo-white.svg'
import bagIcon from '../assets/icons/bag-2.svg'
import menuIcon from '../assets/icons/mobile-menu.svg';
import bagWhiteIcon from '../assets/icons/bag-white.svg'
import heartIcon from '../assets/icons/heart.svg'
import profileIcon from '../assets/icons/profile.svg'
import searchIcon from '../assets/icons/search-normal.svg'
import arrowRightIcon from '../assets/icons/send-right.svg'
import arrowRightIconWhite from '../assets/icons/arrow-right-white.svg'
import arrowIcon from '../assets/icons/send.svg'
import headerImg from '../assets/images/product-header.png'
import acneWomenImg from '../assets/images/acne-women.png';
import product1 from '../assets/images/products/product-1.png'
import product2 from '../assets/images/products/product-2.png'
import product3 from '../assets/images/products/product-3.png'
import product4 from '../assets/images/products/product-4.png'
import product5 from '../assets/images/products/product-5.png'
import product6 from '../assets/images/products/product-6.png'
import testimonialAvatar1 from '../assets/images/testimonials/testimonial-1.png'
import testimonialAvatar2 from '../assets/images/testimonials/testimonial-2.png'
import blogImage1 from '../assets/images/radiant-skin.png';

export {
  logoSvg,
  logoWhiteSvg,
  bagIcon,
  bagWhiteIcon,
  heartIcon,
  menuIcon,
  profileIcon,
  searchIcon,
  arrowRightIcon,
  arrowRightIconWhite,
  arrowIcon,
  headerImg,
  acneWomenImg,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  testimonialAvatar1,
  testimonialAvatar2,
  blogImage1
}

// Asset utilities
export const getAsset = (assetName) => {
  const assets = {
    'logo': logoSvg,
    'logo-white': logoWhiteSvg,
    'bag': bagIcon,
    'bag-white': bagWhiteIcon,
    'heart': heartIcon,
    'profile': profileIcon,
    'menu-icon': menuIcon,
    'search': searchIcon,
    'arrow-right': arrowRightIcon,
    'arrow-right-white': arrowRightIconWhite,
    'arrow-up': arrowIcon,
    'header-img': headerImg,
    'acne-women': acneWomenImg,
    'product-1': product1,
    'product-2': product2,
    'product-3': product3,
    'product-4': product4,
    'product-5': product5,
    'product-6': product6,
    'avatar-1': testimonialAvatar1,
    'avatar-2': testimonialAvatar2,
    'blog-image-1': blogImage1
  }
  
  return assets[assetName] || null
}

export default {
  logoSvg,
  logoWhiteSvg,
  bagIcon,
  bagWhiteIcon,
  heartIcon,
  profileIcon,
  searchIcon,
  arrowRightIcon,
  menuIcon,
  arrowRightIconWhite,
  arrowIcon,
  headerImg,
  acneWomenImg,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  testimonialAvatar1,
  testimonialAvatar2,
  blogImage1,
  getAsset
}
