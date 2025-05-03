/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Platform,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const checkBiometrics = async () => {
      try {
        // Initialize biometrics with platform-specific options
        const rnBiometrics = new ReactNativeBiometrics({
          allowDeviceCredentials: true,
          ...(Platform.OS === 'ios'
            ? {
                promptMessage: 'Authenticate to continue',
                fallbackLabel: 'Use Passcode',
              }
            : {}),
        });

        if (!rnBiometrics) {
          throw new Error('Failed to initialize biometrics');
        }

        const {available, biometryType, error} =
          await rnBiometrics.isSensorAvailable();
        console.log(
          'Biometrics available:',
          available,
          'Type:',
          biometryType,
          'Error:',
          error,
        );

        if (available) {
          const {success, error} = await rnBiometrics.simplePrompt({
            promptMessage: `Authenticate with ${biometryType}`,
            cancelButtonText: 'Cancel',
          });

          console.log('Authentication result:', success, 'Error:', error);

          if (success) {
            setIsAuthenticated(true);
            setAuthError(null);
          } else {
            setAuthError(error || 'Authentication failed');
            Alert.alert('Authentication failed', error || 'Please try again');
          }
        } else {
          const errorMessage = error || 'Biometrics not available';
          setAuthError(errorMessage);
          Alert.alert(
            'Biometrics not available',
            'Please set up biometric authentication on your device',
          );
        }
      } catch (error) {
        console.error('Biometrics error:', error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'Failed to authenticate with biometrics';
        setAuthError(errorMessage);
        Alert.alert('Error', errorMessage);
      }
    };

    checkBiometrics();
  }, []);

  if (!isAuthenticated) {
    return (
      <View style={[backgroundStyle, styles.container]}>
        <Text style={styles.authText}>Please authenticate to continue...</Text>
        {authError && (
          <Text style={[styles.authText, styles.errorText]}>
            Error: {authError}
          </Text>
        )}
      </View>
    );
  }

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <View style={{paddingRight: safePadding}}>
          <Header />
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});

export default App;
