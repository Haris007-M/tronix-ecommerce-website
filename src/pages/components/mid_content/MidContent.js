import React from 'react'
import Carousel from './carousel/Carousel'
import Tags from './category/Tags'
import Newarrival from './new_arival/Newarival'
import FeaturedProducts from './fearuredproducts/FeaturedProducts'
import OurCollection from './ourCollections/OurCollection'
import Blog from './blog/Blog'
import FlashSale from './flashSale/FlashSale'
import Topproducts from './topRatedProducts/TopProducts'
import Client from './brands/Clients'

const MidContent = () => {
  return (
    <>
      <Carousel/>
      <Tags/>
      <Newarrival/>
      {/* <FeaturedProducts/> */}
      <OurCollection/>
      <FlashSale/>
      <Topproducts/>
      {/* <Blog/> */}
      <Client/>
    </>
  )
}

export default MidContent
