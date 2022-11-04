/* eslint-disable no-useless-catch */
import { getAllMeals } from './getAllMeals'

type AccObjectProps = {
  successSequence: number
  lastStatus: boolean
  successArray: number[]
}

export async function getBestSuccessStatusSequence() {
  try {
    const meals = await getAllMeals()

    const bestSuccessStatusSequence = meals
      .map((meal) => meal.status)
      .reduce(
        (accMeal: AccObjectProps, currMeal, index) => {
          if (index === 0 && currMeal === 'failure') {
            return { ...accMeal }
          }
          if (index === meals.length - 1 && currMeal === 'success') {
            return {
              successArray: [
                ...accMeal.successArray,
                accMeal.successSequence + 1,
              ],
              successSequence: 0,
              lastStatus: true,
            }
          }
          if (currMeal === 'failure') {
            return {
              successArray: [...accMeal.successArray, accMeal.successSequence],
              successSequence: 0,
              lastStatus: false,
            }
          } else {
            return {
              successArray: accMeal.successArray,
              successSequence: accMeal.successSequence + 1,
              lastStatus: true,
            }
          }
        },
        { successSequence: 0, lastStatus: false, successArray: [] },
      )

    return Math.max(...bestSuccessStatusSequence.successArray)
  } catch (error) {
    throw error
  }
}
