import {StatusBar} from 'expo-status-bar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Constants from 'expo-constants';
import {LogBox} from "react-native";
import {AppNavi} from "./src/routers/router";
import {ToastProvider} from 'react-native-toast-notifications'

//ViewPropTypes 将从 React Native 中移除-警告
LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
    'Require cycle:',
    'Encountered'
])

export default function App() {
    const isDarkMode = false;
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        //height: '100%',
    };
    return (
        <ToastProvider>
            <View style={styles.container}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}/>
                <NavigationContainer>
                    <AppNavi/>
                </NavigationContainer>
            </View>
        </ToastProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ECF0F1',
        padding: 0,
    },
});
