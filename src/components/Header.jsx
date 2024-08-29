import React from 'react'
import NavigationMain from './NavigationMain'
import NavigationMainResponsive from './NavigationMainResponsive'
import NavTop from './NavTop'
import NavTopResponsive from './NavTopResponsive'


export default function Header() {
  return (
    <>
        {/*  */}
        <NavTop />
        <NavTopResponsive />
        {/*  */}
        <NavigationMain />
        <NavigationMainResponsive />
    </>
  )
}
