export const fetchData = async (serial) => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/${serial}/poll`)

    const data = await response.json()

    return data.rates
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
