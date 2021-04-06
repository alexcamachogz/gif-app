import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories)

  return (
    <>
      <div className="title-container">
        <h2 className="app-title">☀️ GIPHY
          API</h2>
        <p className="attribution">
          Powered by <a className="att-link"
                        href="https://giphy.com/"> Giphy</a>
        </p>
      </div>
      <AddCategory setCategories={setCategories}/>
      <ol>
        {categories.map(category => {
          return <GifGrid
            key={category}
            category={category}
          />
        })
        }
      </ol>
    </>
  )
}

export default GifApp