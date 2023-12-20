import type { ChildrenType } from '@/types'
import React, { FunctionComponent as RFC } from 'react'

import { Container } from '@/app/components'

import { footer, grid, legal } from './footer.module.scss'

export const Footer: RFC<ChildrenType> = () => {
  return (
    <footer className={footer}>
      <Container>
        <div className={grid}>
          <ul>
            <li>
              <span className="large-strong">Das Studio</span>
            </li>
            <li>
              <a className="default" href="/">
                Mein Team
              </a>
            </li>
            <li>
              <a className="default" href="/">
                Adresse
              </a>
            </li>
            <li>
              <a className="default" href="/">
                So finden Sie uns
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <span className="large-strong">Unsere Leistungen</span>
            </li>
            <li>
              <a className="default" href="/">
                Maniküre/Nageldesign
              </a>
            </li>
            <li>
              <a className="default" href="/">
                Pediküre/Fußpflege
              </a>
            </li>
            <li>
              <a className="default" href="/">
                Hochzeitsservice
              </a>
            </li>
            <li>
              <a className="default" href="/">
                Wimpernverlängerung
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <span className="large-strong">Weitere Informationen</span>
            </li>
            <li>
              <a className="default" href="/">
                Preisliste
              </a>
            </li>
            <li>
              <a className="default" href="/">
                Öffnungszeiten
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <span className="large-strong">&nbsp;</span>
            </li>
            <li>
              <a className="default" href="/">
                Datenschutzerklärung
              </a>
            </li>
            <li>
              <a className="default" href="/">
                Impressum
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
