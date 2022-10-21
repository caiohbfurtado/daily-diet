/* eslint-disable camelcase */
import { StatusBar, Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'

import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Text>Aplicação iniciada</Text> : null}
    </ThemeProvider>
  )
}
