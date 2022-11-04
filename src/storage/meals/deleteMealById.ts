/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '../storageConfig'
import { getAllMeals } from './getAllMeals'

export async function deleteMealById(id: string) {
  try {
    const meals = await getAllMeals()
    const newMeals = JSON.stringify(meals.filter((meal) => meal.id !== id))

    await AsyncStorage.setItem(MEAL_COLLECTION, newMeals)
  } catch (error) {
    throw error
  }
}
