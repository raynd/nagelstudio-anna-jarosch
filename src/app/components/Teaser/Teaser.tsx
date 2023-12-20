import type { ChildrenType } from '@/types'

import React, { FunctionComponent as RFC } from 'react'

import { teaser } from './teaser.module.scss'

export const Teaser: RFC<ChildrenType> = ({ children }) => (
  <div className={teaser}></div>
)
