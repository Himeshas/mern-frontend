import React from 'react'
import ProductCard from './productCard'

export default function FeaturedProduct() {
  return (
    <div>
      <h1 className='bg-purple-900 absolute left-[200px] top-[500px]'>Feature this week..!!!!</h1>
      <ProductCard
       name = "NFS"
       image = "https://picsum.photos/id/18/200/300"
       price = "1500.00"
      />
    </div>
  )
}
