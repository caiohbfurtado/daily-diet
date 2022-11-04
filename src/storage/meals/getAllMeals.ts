/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { MealDTO } from './MealStorageDTO'

export async function getAllMeals() {
  try {
    const storagedMeals = (await AsyncStorage.getItem(MEAL_COLLECTION)) ?? '[]'
    const meals: MealDTO[] = JSON.parse(storagedMeals)
    meals.sort(
      (meal1, meal2) =>
        new Date(meal2.date).getTime() - new Date(meal1.date).getTime() ||
        Number(meal2.hour.replace(':', '')) -
          Number(meal1.hour.replace(':', '')),
    )

    return meals
  } catch (error) {
    throw error
  }
}
