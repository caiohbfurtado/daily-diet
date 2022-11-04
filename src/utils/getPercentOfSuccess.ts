import { getAllMeals } from '../storage/meals/getAllMeals'

export async function getPercentOfSuccess() {
  const meals = await getAllMeals()
  if (meals.length === 0) {
    return undefined
  }

  const successStatusSum = meals.reduce(
    (accMealValue, currMealValue) =>
      currMealValue.status === 'success' ? (accMealValue += 1) : accMealValue,
    0,
  )
  const percentSuccessValue = (successStatusSum / meals.length) * 100
  return percentSuccessValue
}
