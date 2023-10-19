/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, useColorScheme, StyleSheet, View} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {GluestackUIProvider, Box, Text, Image, config, Tabs} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import Constants from 'expo-constants';
import NaviTabs from "./src/tabs/NaviTabs";


function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        //height: '100%',
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}/>
            <NavigationContainer>
                <NaviTabs />
            </NavigationContainer>
        </SafeAreaView>
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
export default App;
