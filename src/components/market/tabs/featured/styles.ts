import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingTop: 10,
  },
  tab: {
    alignItems: 'center',
  },
  activeTab: {
    // You can add styles for the active tab if needed
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 5,
    textTransform: 'capitalize',
    color: 'white',
  },
  tabIndicator: {
    height: 3,
    width: '100%',
    backgroundColor: 'transparent',
  },
  activeIndicator: {
    backgroundColor: '#cdff00',
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  cardWrapper: {
    flexDirection: 'row',
    marginRight: 4,
    flexWrap: 'nowrap',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 16,
    textAlign: 'center',
  },
});
