import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Title } from 'native-base';

export default class Profile extends React.Component {
    render(){
        return(
            <Container>
                <Header>
                    <Body>
                    <Title>Profile</Title>
                    </Body>
                </Header>
                <List>
                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: "#FF9501" }}>
                                    <Icon active name="edit" />
                                </Button>                            
                            </Left>
                            <Body>
                            <Text>Person Info</Text>
                            <Text note numberOfLines={3}>
                                Alec Caputo
                                Skier
                                Age: 23
                            </Text>
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
            </Container>
        );
    }
}