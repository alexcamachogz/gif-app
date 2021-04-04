import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem'
// import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGif(category)
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {
          images.map(img => (
            <GifGridItem key={img.id} {...img}/>
          ))
        }
      </div>
    </>
  )
}