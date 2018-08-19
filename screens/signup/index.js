import React from 'react';
import { Container, Header, Content, Form, Item, Input, Body, Title } from 'native-base';

export default class SignUp extends React.Component {
    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Sign up</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Email" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}