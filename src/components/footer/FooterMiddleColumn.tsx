import React from 'react'
import ListItem from './ListItem'

const FooterMiddleColumn = () => {
  return (
    <div className="flex-1">
    <h5 className="h3 font-medium">Quick Link</h5>
    <ul className="spt32px flex flex-col gap-3 md:gap-4">
      <ListItem href="/local-removalists">Local removalists</ListItem>
      <ListItem href="/interstate-removalists">Interstate removalists</ListItem>
      <ListItem href="/service">Services</ListItem>
      <ListItem href="/blogs">Blogs</ListItem>
      <ListItem href="/contact">Contact Us</ListItem>
    </ul>
  </div>
  )
}

export default FooterMiddleColumn