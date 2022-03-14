import React, { useEffect } from 'react'
import ONESdkModule, { Counter } from 'one-sdk-react-native'

const App = () => {
  useEffect(() => {
    console.log(ONESdkModule)
  })

  return <Counter />
}

export default App
