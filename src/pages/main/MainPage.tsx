import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api/fetchData'
import { container, table } from './styles/styles.module.css'

export const MainPage: React.FC = () => {
  const [rates, setRates] = useState<Record<string, Record<string, number>>>({})
  const [currencies, setCurrencies] = useState<string[]>([])

  useEffect(() => {
    setCurrencies(Object.keys(rates?.first ?? {}))
  }, [rates])

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
            {Object.keys(rates).map((pair) => (
              <th key={pair}>{pair}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency}>
              <td>{currency}/CUPCAKE</td>
              {Object.values(rates).map((pairData) => (
                <td key={pairData[currency]}>
                  {pairData[currency].toFixed(3)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
