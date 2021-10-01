import react from 'react'
import styles from '../styles/Home.module.css'

export const Titulo = () => {
  return (
    <>
      <form className={styles.titulo}>
        <div className={styles.cliente}>
          <label>Cliente:</label>
          <select className={styles.select} name="dropdown">
            Cliente
            <option value="text" selected>
              cliente1
            </option>
            <option value="Physics">Cliente2</option>
          </select>
        </div>
        <label>Dirección:</label>
        <select className={styles.direccion} name="dropdown">
          Dirección
          <option value="text" selected>
            Dirección 1
          </option>
          <option value="Physics">Dirección 2</option>
        </select>
        <label>Tel:</label> <input type="text" name="tel" />
        <hr />
        <label>Equipo:</label>
        <input type="text" name="equipo" />
        <label>Marca:</label>
        <input type="text" name="marca" />
        <label>Modelo:</label>
        <input type="text" name="modelo" />
        <label>Nº serie:</label>
        <input type="number" name="serie" />
        <div className={styles.cliente}>
        <label>Falla declarada:</label>
        <br />
          <textarea className={styles.cliente} name="description"></textarea>
        </div>
        <hr />
      </form>
    </>
  )
}
