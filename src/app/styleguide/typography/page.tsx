import { getStyleguideDataTypography } from '@/app/utils'

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
            <p className="default-strong">{key}</p>
            <table>
              <thead>
                <tr>
                  <td>
                    <span className="small">name</span>
                  </td>
                  <td>
                    <span className="small">className</span>
                  </td>
                  <td>
                    <span className="small">size</span>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="small-strong">{key}</span>
                  </td>
                  <td>
                    <span className="small-strong">{cssClass}</span>
                  </td>
                  <td>
                    <span className="small-strong">{size}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className={cssClass}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
            </p>
          </div>
        )
      })}
    </main>
  )
}
