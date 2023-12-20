import type { ChildrenType } from '@/types'

import React, { FunctionComponent as RFC } from 'react'

import { grid } from './grid.module.scss'

export const Grid: RFC<ChildrenType> = ({ children }) => (
  <div className={grid}>{children}</div>
)
