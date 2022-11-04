export type MealDTO = {
  id: string
  title: string
  description: string
  date: Date
  hour: string
  status: 'success' | 'failure'
}

export type MealStorageDTO = {
  date: string
  data: MealDTO[]
}
