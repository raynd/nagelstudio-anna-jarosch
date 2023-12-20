const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

type TObject = {
  [key: string]: string
}

type TData = {
  [key: string]: TObject
}

export const getStyleguideDataTypography = async () => {
  try {
    const pathname = path.resolve(process.cwd(), '.stylite/typography.yaml')
    const data = yaml.load(fs.readFileSync(pathname, 'utf8'))

    const types = data.typography.typeFaces.reduce(
      (acc: TData[], curr: TData) => {
        const key = Object.keys(curr)[0]
        const size = curr[key].size

        curr[key] = {
          ...curr[key],
          sizes: data.typography.typeSizes[size],
        }

        acc.push(curr)
        return acc
      },
      [],
    )

    return types
  } catch (e) {
    console.log(e)
  }
}
