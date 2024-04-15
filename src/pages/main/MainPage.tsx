import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api/fetchData'

export const MainPage: React.FC = () => {
  const [rates, setRates] = useState<Record<string, number>>({})

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const [firstData, secondData, thirdData] = await Promise.all([
          fetchData('first'),
          fetchData('second'),
          fetchData('third'),
        ])

        setRates((prevRates) => ({
          ...prevRates,
          firstData,
          secondData,
          thirdData,
        }))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchDataAsync()
  }, [])

  return <div></div>
}
