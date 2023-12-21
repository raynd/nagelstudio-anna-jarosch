import { getStyleguideDataTypography } from '@/app/utils'
import {
  table,
  typefaceName,
  typefaceSample,
  typefaceLegend,
} from '../styleguide.module.scss'

type TObject = {
  [key: string]: string
}

type TData = {
  [key: string]: TObject
}

async function getData() {
  const data: TData[] = await getStyleguideDataTypography()
  return data
}

export default async function Styleguide() {
  const data: TData[] = await getData()

  return (
    <main>
      {data.map((record, index) => {
        const key = Object.keys(record)[0]
        const { cssClass, size } = record[key]

        return (
          <div key={index}>
            <p className={`pica-strong ${typefaceName}`}>{key}</p>
            <p className={`${typefaceSample} ${cssClass}`}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
            </p>
            <table className={`${table} ${typefaceLegend}`}>
              <thead>
                <tr>
                  <td>
                    <span className="minion">name</span>
                  </td>
                  <td>
                    <span className="minion">className</span>
                  </td>
                  <td>
                    <span className="minion">size</span>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="minion-strong">{key}</span>
                  </td>
                  <td>
                    <span className="minion-strong">{cssClass}</span>
                  </td>
                  <td>
                    <span className="minion-strong">{size}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      })}
    </main>
  )
}
