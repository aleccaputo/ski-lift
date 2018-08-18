import React from 'react';
import { StyleSheet,  View } from 'react-native';
import { Content, Container, Button, Text } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>Open up App.js to start working on your app! YES</Text>
        <Content>
          <Button danger>
              <Text>Button</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
