import * as React from 'react'
import { Button, NativeModules, StyleSheet, Text, View, Modal } from 'react-native'

export const addOne = (input: number) => input + 1

export const pwd = () => {
  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <Modal animationType='slide' presentationStyle='pageSheet'>
      <Text>You pressed {count} times</Text>
      <Button onPress={() => setCount(addOne(count))} title='Press Me' />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})

export default NativeModules.ONESdkModule
