import React, { useEffect, useState } from 'react'

export const MainPage: React.FC = () => {
  const [rates, setRates] = useState<Record<string, number>>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/first/poll')

        const data = await response.json()

        console.log(Object.keys(data.rates))
        setRates(data.rates)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return <div></div>
}
