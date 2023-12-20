'use client'

import React, { useMemo, FunctionComponent as RFC } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { navbar, button, active } from './navigation.module.scss'

export const Navigation: RFC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const onClick = (route: string) => {
    router.push(route)
  }

  const routes = useMemo(
    () => [
      {
        label: 'Typography',
        pathname: '/styleguide/typography',
      },
      {
        label: 'Colors',
        pathname: '/styleguide/colors',
      },
      {
        label: 'Spacings',
        pathname: '/styleguide/spacings',
      },
    ],
    [],
  )

  return (
    <nav className={navbar}>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <button
              className={
                route.pathname === pathname
                  ? `button-text ${button} ${active}`
                  : `button-text ${button}`
              }
              onClick={() => onClick(route.pathname)}
            >
              {route.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
