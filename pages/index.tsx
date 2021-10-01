import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Titulo } from '../components/titulo'
import { Repuestos } from '../components/repuestos'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plantilla Servicio Tecnico</title>
        <meta name="description" content="plantilla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <img src="uno.png" />
        <span>UNO ELECTROMEDICINA</span>
        <div>Reparación y venta de Equipamiento Médico y para laboratorios</div>
        <span>Chaco 801 - Mar del Plata</span>
        <h1>Comprobante de Asistencia Técnica</h1>
        <div className={styles.header}>
          <p>Nº 0000000</p>
          <div>
            <label>Fecha</label>
            <input
              type="date"
              name="begin"
              placeholder="dd-mm-yyyy"
              value=""
              min="1997-01-01"
              max="2030-12-31"
            />
          </div>
        </div>
      </body>
      <hr />

      <Titulo />
      <Repuestos />
      <footer className={styles.footer}>{/*footer*/}</footer>
    </div>
  )
}
