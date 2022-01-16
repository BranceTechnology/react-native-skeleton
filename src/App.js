import React from 'react'
import { Box, NativeBaseProvider } from 'native-base'
import { StyleSheet, useColorScheme } from 'react-native'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({})

export default App
