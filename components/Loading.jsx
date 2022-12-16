import React from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native'

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 15
  }
})
