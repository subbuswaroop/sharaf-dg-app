import { useState } from 'react'
import contentData from '../data/content.json'

// This will serve data to the entire application based on the component needs
export const useContent = () => {
  const [content] = useState(contentData)

  // Function to get nested content by path
  const getContent = (path) => {
    return path.split('.').reduce((obj, key) => obj?.[key], content)
  }

  return {
    content,
    getContent,
  }
}

export default useContent
