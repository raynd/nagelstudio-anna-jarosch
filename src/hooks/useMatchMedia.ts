import file from '@root/.stylite/breakpoints.yaml'
import { useEffect, useCallback, useState } from 'react'
import { useMediaQueries } from '.'

const viewportBreakpoints = Object.entries(file.breakpoints)

type ObjType = {
  [key: string]: string
}

type MediaQueriesType = {
  [key: string]: ObjType
}

export function useMatchMedia(args: string[]): string {
  const [matchViewport, setMatchViewport] = useState('')
  const mediaQueries: MediaQueriesType = useMediaQueries(viewportBreakpoints)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const matchMediaList: any[] = []

  const handleChange = useCallback(
    (e) => {
      if (e.currentTarget.matches) {
        const regEx = /(\d+px)/gm
        const matchedValue = e.currentTarget.media.match(regEx)
        const result: string | undefined = Object.keys(mediaQueries).find(
          (item) => mediaQueries[item].min === matchedValue[0],
        )
        setMatchViewport(result ? result : '')
      }
    },
    [mediaQueries],
  )

  useEffect(() => {
    Object.keys(mediaQueries).forEach((mq, i) => {
      matchMediaList[i] = window.matchMedia(
        `(min-width: ${mediaQueries[mq].min})`,
      )
    })

    matchMediaList.map((entry, i) => {
      return entry.addEventListener('change', handleChange)
    })

    return () => {
      matchMediaList.map((entry, i) => {
        return entry.removeEventListener('change', handleChange)
      })
    }
  }, [mediaQueries, matchMediaList, handleChange])

  return matchViewport
}
