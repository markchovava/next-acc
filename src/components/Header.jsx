import React from 'react'
import NavigationMain from './NavigationMain'
import NavigationMainResponsive from './NavigationMainResponsive'
import NavTop from './NavTop'
import NavTopResponsive from './NavTopResponsive'

import { getAuthCookie } from '@/cookie/authCookie'
import { getRoleCookie } from '@/cookie/roleCookie'


export default function Header() {


  return (
    <>
    { getAuthCookie() &&
      <>
        <NavTop />
        <NavTopResponsive />
      </>
    }
        
    {/*  */}
    <NavigationMain />
    <NavigationMainResponsive />
    
    </>
  )
}
