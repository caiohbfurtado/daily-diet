export function stringToDate(date: string) {
  const dateArray = date.split('/')

  const newDate = new Date(
    Number(dateArray[2]),
    Number(dateArray[1]) - 1,
    Number(dateArray[0]),
  )

  return newDate
}
