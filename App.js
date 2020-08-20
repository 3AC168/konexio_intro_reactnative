import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert, ActivityIndicator} from 'react-native';
//import { WebView } from 'react-native-webview';
/*
class MyWebComponent extends Component {
  render() {
    return (      
      <View>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <WebView source={{uri: 'https://www.konexio.eu/index.html'}}        
        />
        <ActivityIndicator />
      </View>      
    );
  }
}*/

export default function App() {
  return(
    <ScrollView>
      <View>
        <Text>Bonjour Le Monde, </Text>
      </View>
      <View>
        <Text>To share a photo from your phone with a friend, just press the button below!</Text>
      </View>
      <View>
        <Text style ={{fontWeight: 'bold'}}>You will find the amazing images. </Text>    
      </View> 
      <View>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      <Image source={require('./assets/konexio-logo_1.png')} />
      <Image 
        source={{uri:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}} 
        style={{width: 200, height: 200}} />
      <Button 
        title="Press me"
        color="blue"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </ScrollView>
  )
 }; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    fontSize: 30,
    padding: 80,     
    alignItems: 'center',
    justifyContent: 'center',
  },
});


