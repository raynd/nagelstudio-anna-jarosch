import type { ChildrenType } from '@/types'
import React, { FunctionComponent as RFC } from 'react'

import { Container } from '@/app/components'

import { footer, grid } from './footer.module.scss'

export const Footer: RFC<ChildrenType> = () => {
  return (
    <footer className={footer}>
      <Container>
        <div className={grid}>
          <div>
            <a className="default-strong" href="/">
              Mein Team
            </a>
          </div>
          <div>
            <ul>
              <li>
                <a className="default-strong" href="/">
                  Maniküre/Nageldesign
                </a>
              </li>
              <li>
                <a className="default-strong" href="/">
                  Pediküre/Fußpflege
                </a>
              </li>
              <li>
                <a className="default-strong" href="/">
                  Hochzeitsservice
                </a>
              </li>
              <li>
                <a className="default-strong" href="/">
                  Wimpernverlängerung
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a className="default-strong" href="/">
                  Preisliste
                </a>
              </li>
              <li>
                <a className="default-strong" href="/">
                  Öffnungszeiten
                </a>
              </li>
              <li>
                <a className="default-strong" href="/">
                  So finden Sie uns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a className="default-strong" href="/">
                  Kontakt
                </a>
              </li>
              <li>
                <a className="default-strong" href="/">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a className="default-strong" href="/">
                  Impressum
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </Container>
    </footer>
  )
}
