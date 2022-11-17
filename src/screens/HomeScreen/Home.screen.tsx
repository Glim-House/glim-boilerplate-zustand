import { View, Text, Button } from 'react-native'
import React from 'react'
import { t } from 'react-native-tailwindcss'
import { usePreviousRouteName } from '../../navigation/navigationsUtils'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/navigation/rootNavigation'
import { useStore } from '../../store/store'

type Props = {}

const HomePage = (_props: Props) => {
  const { count, increment, decrement } = useStore()
  const prevRoute = usePreviousRouteName()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
    <View style={[t.flex1, t.justifyCenter, t.alignCenter, t.selfCenter]}>
      <View
        style={[
          t.bgBlue300,
          t.p3,
          t.mB4,
          t.rounded,
          t.flexRow,
          t.justifyBetween
        ]}
      >
        <Text style={[t.textCenter, t.text3xl, t.fontBold]} onPress={decrement}>
          -{' '}
        </Text>
        <Text style={[t.textCenter, t.text3xl, t.fontBold]}>{count}</Text>
        <Text style={[t.textCenter, t.text3xl, t.fontBold]} onPress={increment}>
          +
        </Text>
      </View>
      <Text style={[t.textBlack]}>Home.Page</Text>
      <Text style={[t.textBlack]}>Prev route : {prevRoute} </Text>
      <Button
        title="Go to List"
        onPress={() => {
          navigation.navigate('ListPage')
        }}
      />
    </View>
  )
}

export default HomePage
