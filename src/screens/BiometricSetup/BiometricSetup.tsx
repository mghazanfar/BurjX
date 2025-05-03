import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';

const {width, height} = Dimensions.get('window');

type BiometricSetupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BiometricSetup'
>;

const BiometricSetup = () => {
  const navigation = useNavigation<BiometricSetupScreenNavigationProp>();

  useEffect(() => {
    checkBiometricStatus();
  }, []);

  const checkBiometricStatus = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics({
        allowDeviceCredentials: true,
      });

      // Check if biometrics are available on the device
      const {available, biometryType} = await rnBiometrics.isSensorAvailable();

      if (available) {
        // Try to authenticate to check if biometrics are enrolled
        try {
          const {success} = await rnBiometrics.simplePrompt({
            promptMessage: `Authenticate with ${biometryType}`,
            cancelButtonText: 'Cancel',
          });

          if (success) {
            navigation.navigate('Markets');
          }
        } catch (error) {
          // If we get an error here, it means biometrics are not enrolled
          console.log('Initial authentication error:', error);
        }
      }
    } catch (error) {
      console.error('Error checking biometric status:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header Text */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Use Biometric</Text>
        <Text style={styles.headerText}>to log in?</Text>
      </View>

      <View style={styles.fingerprintContainer}>
        <Image
          source={{
            uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%202085663020-gXWYxc5HNyORBQ3SZmAdQfnfVYnN1i.png',
          }}
          style={styles.fingerprintImage}
          resizeMode="cover"
          resizeMethod="resize"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 50,
    fontFamily: 'Lufga',
  },
  fingerprintContainer: {
    width: 300,
    height: 300,
    flex: 1,
  },
  fingerprintImage: {
    width: '100%',
    height: '100%',
  },
  setupButton: {
    backgroundColor: '#cdff00',
    width: width - 48,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  setupButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Lufga-Regular',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2.5,
    marginTop: 10,
  },
});

export default BiometricSetup;
