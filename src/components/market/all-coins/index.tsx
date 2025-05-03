import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import {CoinCard} from './coin';

export const AllCoins = ({coins}: any) => {
  return (
    <View style={{padding: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: 'white',
            paddingBottom: 10,
            borderBottomColor: '#CDFF00',
            borderBottomWidth: 1,
            width: 131,
            textAlign: 'center',
          }}>
          All Coins
        </Text>
        <View
          style={{
            backgroundColor: '#1a1a1a',
            width: '60%',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <TextInput
            style={{width: '83%', fontSize: 20, color: 'white'}}
            placeholder="Search..."
            placeholderTextColor={'#868686'}
          />
          <View style={{marginLeft: 20}}>
            <Image
              source={{
                uri: 'https://static-00.iconduck.com/assets.00/search-icon-512x512-dxj09ddf.png',
              }}
              width={22}
              height={22}
            />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={{gap: 2, marginTop: 16}}>
        {coins?.map(coin => (
          <CoinCard {...coin} />
        ))}
      </ScrollView>
    </View>
  );
};
