import { getStyleguideDataTypography } from '@/app/utils'
import { TypeSize } from '@/app/components/Styleguide'
import {
  table,
  typefaceName,
  typefaceSample,
  typefaceLegend,
  grid,
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
        const { cssClass, size, name, description } = record[key]

        return (
          <div key={index} className={grid}>
            <div>
              <p className={`brevier-strong ${typefaceName}`}>{name}</p>
              <TypeSize cssClass={cssClass} data={data} typefaceKey={key} />

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
                      <span className="minion-strong">{name}</span>
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
              <p className={`brevier-strong`}>Description</p>
              <p className={`body-copy`}>{description}</p>
            </div>
            <div>
              <p className={`brevier-strong ${typefaceName}`}>&nbsp;</p>
              <p className={`${typefaceSample} ${cssClass}`}>
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief...
                <br />
                <br />
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
                #§&?!/*#-
              </p>
            </div>
          </div>
        )
      })}
    </main>
  )
}
