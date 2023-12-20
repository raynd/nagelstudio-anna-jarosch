import type { ChildrenType } from '@/types'

import React, { FunctionComponent as RFC } from 'react'

export const Container: RFC<ChildrenType> = ({ children }) => (
  <div className="c1">{children}</div>
)
