/* eslint-disable no-useless-catch */
import { AppError } from '@utils/AppError'
import { getAllMeals } from './getAllMeals'

export async function getMealById(id: string) {
  try {
    const meals = await getAllMeals()

    const meal = meals.filter((currentMeal) => currentMeal.id === id)

    if (meal.length < 0) {
      throw new AppError('Não foi possível buscar a refeição')
    }

    return meal[0]
  } catch (error) {
    throw error
  }
}
