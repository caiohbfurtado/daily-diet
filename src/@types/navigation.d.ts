/* eslint-disable no-unused-vars */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      NewMeal: undefined
      Meal: {
        id: string
      }
      MealsSummary: undefined
      EditMeal: {
        id: string
      }
      Feedback: {
        status: 'success' | 'failure'
      }
    }
  }
}
