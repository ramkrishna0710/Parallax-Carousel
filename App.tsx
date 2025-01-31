import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import LoadingIndicator from './src/components/LoadingIndicator'
import CustomButton from './src/screens/CustomButton'

const App = () => {
  return (
    // <Home/>
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#010100'
    //   }}
    // >
    //   <LoadingIndicator size={60} />
    // </View>
    <CustomButton/>
  )
}

export default App