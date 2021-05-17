import React, {useState}  from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

const HelloWorldApp = () => {
    const [count, setCount] = useState(0)
  return (
  <ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Count: {count}</Text>
      <Button onPress={()=> setCount(count + 1)} title='Click ME'/>


    </View>
  </ScrollView>
  )
}
export default HelloWorldApp;