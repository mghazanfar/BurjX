import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {CoinCard} from './coin';

export const AllCoins = ({coins}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>All Coins</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={'#868686'}
          />
          <View style={styles.searchIconContainer}>
            <Image
              source={{
                uri: 'https://static-00.iconduck.com/assets.00/search-icon-512x512-dxj09ddf.png',
              }}
              style={styles.searchIcon}
            />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {coins?.map(coin => (
          <CoinCard {...coin} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    paddingBottom: 10,
    borderBottomColor: '#CDFF00',
    borderBottomWidth: 1,
    width: 131,
    textAlign: 'center',
  },
  searchContainer: {
    backgroundColor: '#1a1a1a',
    width: '60%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  searchInput: {
    width: '83%',
    fontSize: 20,
    color: 'white',
  },
  searchIconContainer: {
    marginLeft: 20,
  },
  searchIcon: {
    width: 22,
    height: 22,
  },
  scrollContainer: {
    gap: 2,
    marginTop: 16,
  },
});
