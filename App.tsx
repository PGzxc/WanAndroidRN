/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box, Text, Image} from '@gluestack-ui/themed';

const FeatureCard = ({iconSvg, name, desc}: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        <Image source={iconSvg} alt="document" width={22} height={22} />
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};

const Container = () => {
  const gradientImage = require('./assets/gradient.svg');
  const documentImage = require('./assets/document-data.svg');
  const lightbulbImage = require('./assets/lightbulb-person.svg');
  const rocketImage = require('./assets/rocket.svg');
  return (
    <Box flex={1} bg="$black" h="100%">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Box
          position="absolute"
          sx={{
            '@base': {
              h: 500,
              w: 500,
            },
            '@lg': {
              h: 700,
              w: 700,
            },
          }}
        >
          <Image source={gradientImage} alt="Gradient" h="100%" w="100%" />
        </Box>
        <Box
          flex={1}
          sx={{
            '@base': {
              my: '$16',
              mx: '$5',
            },
            '@lg': {
              my: '$24',
              mx: '$32',
            },
          }}
          alignItems="center"
        >
          <Box
            bg="#64748B33"
            py="$2"
            px="$6"
            rounded="$full"
            alignItems="center"
            sx={{
              '@base': {
                flexDirection: 'column',
              },
              '@sm': {
                flexDirection: 'row',
              },
              '@md': {alignSelf: 'flex-start'},
            }}
          >
            <Text color="$white" fontWeight="$normal">
              Get started by editing
            </Text>
            <Text color="$white" fontWeight="$medium" ml="$2">
              App.tsx
            </Text>
          </Box>
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            sx={{
              '@base': {
                h: 20,
                w: 300,
              },
              '@lg': {
                h: 160,
                w: 400,
              },
            }}
          >
            {/* <Image src="/logo.svg" fill alt="logo" priority /> */}
          </Box>
          <Box
            sx={{
              '@base': {
                flexDirection: 'column',
              },
              '@md': {
                flexDirection: 'row',
              },
            }}
          >
            <FeatureCard
              iconSvg={documentImage}
              name="Docs"
              desc="Find in-depth information about gluestack features and API."
            />
            <FeatureCard
              iconSvg={lightbulbImage}
              name="Learn"
              desc="Learn about gluestack in an interactive course with quizzes!"
            />
            <FeatureCard
              iconSvg={rocketImage}
              name="Deploy"
              desc="Instantly drop your gluestack site to a shareable URL with vercel."
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GluestackUIProvider config={config}>
        <Box
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
          height="100%"
        >
          <Container />
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
