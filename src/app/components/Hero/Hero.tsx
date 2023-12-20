import type { HeroType } from '@/types'
import React, { FunctionComponent as RFC } from 'react'

import Image from 'next/image'

import { hero } from './hero.module.scss'

export const Hero: RFC<HeroType> = ({ children }) => (
  <div className={hero}>
    <Image fill={true} alt="Heroimage" src="/images/hero.jpg" />
  </div>
)
