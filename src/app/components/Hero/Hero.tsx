import type { HeroType } from '@/types'

import React, { FunctionComponent as RFC } from 'react'

import { hero } from './hero.module.scss'

export const Hero: RFC<HeroType> = ({ children }) => (
  <div className={hero}>{children}</div>
)
