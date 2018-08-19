import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './screens/login';
import SignUp from './screens/signup'
import { createStackNavigator } from 'react-navigation';
import { Container } from 'native-base'

const RootStack = createStackNavigator(
   {
       Login: Login,
       SignUp: SignUp
   },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        // native base uses roboto...and the view was rendering before expo had the font loaded.
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }

    state = {
        isLoggedIn: false
    };

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <Container style={{flex: 1}}>
                <RootStack/>
            </Container>
        );
    }

}
