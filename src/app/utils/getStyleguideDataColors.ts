const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

type TObject = {
  [key: string]: string
}

type TData = {
  [key: string]: TObject
}

export const getStyleguideDataColors = async () => {
  try {
    const pathname = path.resolve(process.cwd(), '.stylite/colors.yaml')
    const data = yaml.load(fs.readFileSync(pathname, 'utf8'))

    return data.colors
  } catch (e) {
    console.log(e)
  }
}
