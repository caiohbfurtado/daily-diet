/* eslint-disable no-useless-catch */
import { MealDTO } from './MealStorageDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '../storageConfig'
import { getAllMeals } from './getAllMeals'

export async function createNewMeal(meal: MealDTO) {
  try {
    const storagedMeals: MealDTO[] = await getAllMeals()

    const newStoragedMeals = JSON.stringify([...storagedMeals, meal])
    await AsyncStorage.setItem(MEAL_COLLECTION, newStoragedMeals)
  } catch (error) {
    throw error
  }
}
