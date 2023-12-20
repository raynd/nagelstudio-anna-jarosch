import type { ChildrenType } from '@/types'
import React, { FunctionComponent as RFC } from 'react'

import { Logo, Container } from '@/app/components'

import { header } from './header.module.scss'

export const Header: RFC<ChildrenType> = () => {
  return (
    <header className={header}>
      <Container>
        <Logo />
      </Container>
    </header>
  )
}
