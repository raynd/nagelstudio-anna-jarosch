import React from 'react'
import Image from 'next/image'

import { logo } from './logo.module.scss'

export default function Logo() {
  return (
    <div className={logo}>
      <Image src="/logo.png" alt="logo" width={175} height={100} priority />
    </div>
  )
}
