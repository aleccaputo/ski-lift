import React from 'react';
import { Container, Header, Content, Form, Item, Input, Title, Body, Button, Text, Label } from 'native-base';
import {StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native";

export default class Login extends React.Component {
    render(){
        return(
            <KeyboardAvoidingView>
                <ScrollView>
                    <Container>
                        <Header>
                            <Body>
                            <Title>Log In</Title>
                            </Body>
                        </Header>
                        <Content style={styles.form}>
                            <Form>
                                <Item floatingLabel style={styles.input}>
                                    <Label>Username</Label>
                                    <Input style={styles.inputText}/>
                                </Item>
                                <Item floatingLabel last style={styles.input}>
                                    <Label>Password</Label>
                                    <Input style={styles.inputText} />
                                </Item>
                            </Form>
                            <Button transparent info onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text>Sign Up</Text>
                            </Button>
                        </Content>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#222',
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    input: {
        margin: 20
    },

    inputText: {
        color: '#fff'
    }
});