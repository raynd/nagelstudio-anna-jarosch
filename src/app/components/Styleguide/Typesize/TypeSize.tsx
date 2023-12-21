'use client'

import React, { useEffect, useState, FunctionComponent as RFC } from 'react'

import { useMatchMedia } from '@/hooks'
import { typefaceSize } from './typesize.module.scss'

type TObject = {
  [key: string]: string
}

type TData = {
  [key: string]: TObject
}

type TypeSizeType = {
  cssClass: string
  data: TData[]
  typefaceKey: string
}

export const TypeSize: RFC<TypeSizeType> = ({
  cssClass,
  data,
  typefaceKey,
}) => {
  const [valueSize, setValueSize] = useState('')
  const [valueLineHeight, setValueLineHeight] = useState('')
  const viewport = useMatchMedia()

  useEffect(() => {
    const typeface = data.find((item) => Object.keys(item)[0] === typefaceKey)

    if (!typeface || !viewport.length) return

    const properties = typeface[typefaceKey]

    setValueSize(() => properties.sizes[viewport].size.replace(/rem/, ''))
    setValueLineHeight(() =>
      properties.sizes[viewport]['line-height'].replace(/rem/, ''),
    )
  }, [viewport, data, typefaceKey])

  return (
    <p className={`${cssClass} ${typefaceSize}`}>
      <span>{valueSize}/</span>
      <span>{valueLineHeight}</span>
    </p>
  )
}
