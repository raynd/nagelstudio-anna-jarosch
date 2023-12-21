import { useEffect, useCallback, useState } from 'react'
import { useMediaQueries } from '.'

import file from '@root/.stylite/breakpoints.yaml'

type ObjType = {
  [key: string]: string
}

type MediaQueriesType = {
  [key: string]: ObjType
}

const viewportBreakpoints = Object.entries(file.breakpoints)
const regEx = /(\d+px)/gm

export function useMatchMedia(): string {
  const [matchViewport, setMatchViewport] = useState('')
  const mediaQueries: MediaQueriesType = useMediaQueries(viewportBreakpoints)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const matchMediaList: any[] = []

  const handleChange = useCallback(
    (e) => {
      if (e.currentTarget.matches) {
        const matchedValue = e.currentTarget.media.match(regEx)
        const result: string | undefined = Object.keys(mediaQueries).find(
          (item) =>
            mediaQueries[item].min === matchedValue[0] ||
            mediaQueries[item].max === matchedValue[0],
        )
        setMatchViewport(result ? result : '')
      }
    },
    [mediaQueries],
  )

  useEffect(() => {
    Object.keys(mediaQueries).forEach((mq) => {
      matchMediaList.push(
        window.matchMedia(`(min-width: ${mediaQueries[mq].min})`),
      )
      matchMediaList.push(
        window.matchMedia(`(max-width: ${mediaQueries[mq].max})`),
      )
    })

    matchMediaList.forEach((mq) => {
      if (mq.matches && mq.media.includes('min')) {
        const lastMatches = mq.media.match(regEx)
        const currentViewport = Object.keys(mediaQueries).find(
          (item) => mediaQueries[item].min === lastMatches[0],
        )

        if (currentViewport) setMatchViewport(currentViewport)
      }
    })

    matchMediaList.map((entry) => {
      return entry.addEventListener('change', handleChange)
    })

    return () => {
      matchMediaList.map((entry) =>
        entry.removeEventListener('change', handleChange),
      )
    }
  }, [mediaQueries, matchMediaList, handleChange])

  return matchViewport
}
