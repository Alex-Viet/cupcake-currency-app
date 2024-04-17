import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api/fetchData'
import { container, table, highlight } from './styles/styles.module.css'
import { findMinRate } from '../../utils/findMin'

export const MainPage: React.FC = () => {
  const [rates, setRates] = useState<Record<string, Record<string, number>>>({})
  const [currencies, setCurrencies] = useState<string[]>([])
  const [minRate, setMinRate] = useState<number | null>(null)

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

  useEffect(() => {
    const minRateValue = findMinRate(rates, currencies)
    setMinRate(minRateValue)
  }, [rates, currencies])

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
                <td
                  key={pairData[currency]}
                  className={pairData[currency] === minRate ? highlight : ''}
                >
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
