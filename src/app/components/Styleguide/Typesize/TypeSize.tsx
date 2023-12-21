'use client'

import React, { useEffect, FunctionComponent as RFC } from 'react'

import { useMatchMedia } from '@/hooks'
import { typefaceSize } from '@/app/styleguide/styleguide.module.scss'

type TypeSizeType = {
  cssClass: string
}

export const TypeSize: RFC<TypeSizeType> = ({ cssClass }) => {
  const viewport = useMatchMedia()

  useEffect(() => {
    console.log(viewport)
  }, [viewport])

  return <p className={`${cssClass} ${typefaceSize}`}>56/64</p>
}
