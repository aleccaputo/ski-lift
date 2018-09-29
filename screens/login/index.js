import React from 'react';
import { Container, Header, Content, Form, Item, Input, Title, Body, Button, Text, Label } from 'native-base';
import {StyleSheet, ScrollView, KeyboardAvoidingView, Image, AsyncStorage} from "react-native";

export default class Login extends React.Component {

    _signInAsync = async () => {
        await AsyncStorage.setItem("userToken", "abc");
        this.props.navigation.navigate('App')
    };

    render(){
        return(
            <KeyboardAvoidingView>
                <ScrollView>
                    <Container style={styles.header}>
                        <Header>
                            <Body>
                            <Title>Log In</Title>
                            </Body>
                        </Header>
                        <Content style={styles.form}>
                            <Content contentContainerStyle={styles.imageStyles}>
                                <Image style={{width: 50, height: 50, justifyContent: 'center'}} source={require('../../assets/ski-lift-image.png')}/>
                            </Content>
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
                            <Content>
                                <Button primary full onPress={this._signInAsync}>
                                    <Text>Sign In</Text>
                                </Button>
                                <Button full transparent info onPress={() => this.props.navigation.navigate('SignUp')}>
                                    <Text>Sign Up</Text>
                                </Button>
                            </Content>
                        </Content>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
    },
    form: {
        backgroundColor: '#222',
    },

    imageStyles: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 30
    },

    logInButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        margin: 20
    },

    inputText: {
        color: '#fff'
    }
});