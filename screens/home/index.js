import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Title } from 'native-base';
export default class Home extends React.Component {
    render(){
        return(
            <Container style={styles.header}>
                <Header>
                    <Body>
                    <Title>Recent Posts</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../../assets/stowe.jpg' )} />
                            </Left>
                            <Body>
                            <Text>Stowe</Text>
                            <Text note numberOfLines={1}>3 seats open</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../../assets/magnifying-glass-vector.png' )} />
                            </Left>
                            <Body>
                            <Text>Ride to Smugglers Notch</Text>
                            <Text note numberOfLines={1}>Will pay for gas</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
    }
});