/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { getAllMeals } from './getAllMeals'
import { MealDTO } from './MealStorageDTO'

export async function updateMealById(id: string, meal: Omit<MealDTO, 'id'>) {
  try {
    const storagedMeals = await getAllMeals()
    const newMeal = {
      id,
      ...meal,
    }

    const newMeals = storagedMeals.map((currentMeal) =>
      currentMeal.id === id ? newMeal : currentMeal,
    )

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMeals))
  } catch (error) {
    throw error
  }
}
