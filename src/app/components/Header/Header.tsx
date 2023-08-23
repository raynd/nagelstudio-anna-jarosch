import React from 'react'
import Logo from '@/app/components/Logo'

import { header } from './header.module.scss'

function Header() {
  return (
    <header className={header}>
      <Logo />
    </header>
  )
}

export default Header
