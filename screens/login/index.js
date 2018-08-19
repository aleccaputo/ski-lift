import React from 'react';
import { Container, Header, Content, Form, Item, Input, Title, Body, Button, Text } from 'native-base';
import {StyleSheet, ScrollView} from "react-native";

export default class Login extends React.Component {
    render(){
        return(
            <Container>
                <Header>
                    <Body>
                    <Title>Log In</Title>
                    </Body>
                </Header>
                <Content style={styles.container}>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                    <Button transparent info onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text>Sign Up</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
//
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
    },
});