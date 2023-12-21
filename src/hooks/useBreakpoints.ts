type ObjType = {
  [key: string]: string
}

export function useBreakpoints(breakpoints: any[]): ObjType {
  let vp = breakpoints.reduce((acc, curr) => {
    let obj = {
      ...acc,
      ...{
        [curr[0]]: curr[1],
      },
    }
    return obj
  }, [])
  return vp
}
