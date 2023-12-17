import React from 'react'
import Logo from '@/app/components/Logo'
import Container from '../Container'

import { header } from './header.module.scss'

function Header() {
  return (
    <header className={header}>
      <Container>
        <Logo />
      </Container>
    </header>
  )
}

export default Header
