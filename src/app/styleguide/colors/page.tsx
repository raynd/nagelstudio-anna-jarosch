import { getStyleguideDataColors } from '@/app/utils'

type TObject = {
  [key: string]: string
}

type TData = {
  [key: string]: TObject
}

async function getData() {
  const data: TData[] = await getStyleguideDataColors()
  return data
}

export default async function Styleguide() {
  const data: TData[] = await getData()

  return (
    <main>
      {data.map((record, index) => {
        const key = Object.keys(record)[0]
        const scala = Object.entries(record[key])

        return (
          <div key={index} style={{ marginBottom: '5rem' }}>
            <p className="default-strong">{key}</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
              }}
            >
              {scala.map(([graduation, value], i) => {
                return (
                  <div key={i}>
                    <div
                      style={{
                        backgroundColor: value,
                        width: '130px',
                        aspectRatio: '4/3',
                      }}
                    ></div>
                    <div className="small">{graduation}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </main>
  )
}
