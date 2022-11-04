import { useNavigation, useRoute } from '@react-navigation/native'

import * as S from './styles'

import { Button } from '@components/Button'

import successFeedbackImg from '@assets/success-feedback.png'
import failureFeedbackImg from '@assets/failure-feedback.png'

const infoBasedInStatus = {
  success: {
    title: 'Continue assim!',
    text: () => (
      <S.Text>
        Você continua <S.BoldText>dentro da dieta.</S.BoldText> Muito bem!
      </S.Text>
    ),
    sourceImg: successFeedbackImg,
  },
  failure: {
    title: 'Que pena!',
    text: () => (
      <S.Text>
        Você <S.BoldText>saiu da dieta</S.BoldText> dessa vez, mas continue se
        esforçando e não desista!
      </S.Text>
    ),
    sourceImg: failureFeedbackImg,
  },
}

type RouteParamsProps = {
  status: 'success' | 'failure'
}

export function Feedback() {
  const { params } = useRoute()
  const navigation = useNavigation()
  const { status } = params as RouteParamsProps
  const { sourceImg, text: Text, title } = infoBasedInStatus[status]

  function handleGoHome() {
    navigation.navigate('Home')
  }

  return (
    <S.Container>
      <S.Title status={status}>{title}</S.Title>
      <Text />
      <S.Image source={sourceImg} />
      <Button title="Ir para a página inicial" onPress={handleGoHome} />
    </S.Container>
  )
}
