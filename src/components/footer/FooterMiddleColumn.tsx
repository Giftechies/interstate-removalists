import React from 'react'
import ListItem from './ListItem'

const FooterMiddleColumn = () => {
  return (
    <div className="flex-1">
    <h5 className="h3 font-medium">Quick Link</h5>
    <ul className="spt32px flex flex-col gap-3 md:gap-4">
      <ListItem href="/about-us">About Us</ListItem>
      <ListItem href="/blogs">Our Blog</ListItem>
      <ListItem href="/service">Services</ListItem>
      <ListItem href="/feature">Our Features</ListItem>
      <ListItem href="/contact">Contact Us</ListItem>
    </ul>
  </div>
  )
}

export default FooterMiddleColumn