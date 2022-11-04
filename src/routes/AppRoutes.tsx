import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Meal } from '@screens/Meal'
import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { Feedback } from '@screens/Feedback'
import { EditMeal } from '@screens/EditMeal'
import { MealsSummary } from '@screens/MealsSummary'

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="Meal" component={Meal} />
      <Screen name="EditMeal" component={EditMeal} />
      <Screen name="Feedback" component={Feedback} />
      <Screen name="MealsSummary" component={MealsSummary} />
    </Navigator>
  )
}
