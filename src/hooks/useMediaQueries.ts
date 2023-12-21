type ObjType = {
  [key: string]: string
}

type MediaQueriesType = {
  [key: string]: ObjType
}

export function useMediaQueries(breakpoints: any[]): MediaQueriesType {
  let mq: MediaQueriesType = breakpoints.reduce((acc, curr, i, arr) => {
    let obj =
      i < arr.length - 1
        ? {
            ...acc,
            [breakpoints[i][0]]: {
              ...{
                min: curr[1],
                max: +(arr[i + 1][1].replace(/px/, '') - 1).toString() + 'px',
              },
            },
          }
        : {
            ...acc,
            [breakpoints[i][0]]: {
              ...{
                min: curr[1],
              },
            },
          }
    return obj
  }, {})

  return mq
}
