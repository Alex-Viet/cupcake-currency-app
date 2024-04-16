import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api/fetchData'
import { container, table } from './styles/styles.module.css'

export const MainPage: React.FC = () => {
  const [rates, setRates] = useState<Record<string, Record<string, number>>>({})

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const [first, second, third] = await Promise.all([
          fetchData('first'),
          fetchData('second'),
          fetchData('third'),
        ])

        setRates((prevRates) => ({
          ...prevRates,
          first,
          second,
          third,
        }))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchDataAsync()
  }, [])

  return (
    <div className={container}>
      <table className={table}>
        <thead>
          <tr>
            <th>Pair name/market</th>
            <th>First</th>
            <th>Second</th>
            <th>Third</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rates).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.RUB.toFixed(3)}</td>
              <td>{value.USD.toFixed(3)}</td>
              <td>{value.EUR.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
