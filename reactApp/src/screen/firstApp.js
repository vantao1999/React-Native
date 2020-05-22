import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    image: require('../images/food.png'),
    title: 'Diet Recommendation',
  },
  {
    image: require('../images/food.png'),
    title: 'Exercises',
  },
  {
    image: require('../images/food.png'),
    title: 'Third Item1',
  },
  {
    image: require('../images/food.png'),
    title: 'Third Item',
  },
  {
    image: require('../images/food.png'),
    title: 'Third Item3',
  },
  {
    image: require('../images/food.png'),
    title: 'Third Item4',
  },
];
const DisplayAnImage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.background}
          source={require('../images/img-first.png')}
        />
      </View>
      <View>
        <Text style={styles.text}>Good Morning Thanh Phan</Text>
      </View>
      <View style={styles.viewSearch}>
        <TextInput style={styles.searchInput}>
          <Image
            style={styles.search}
            source={require('../images/search.png')}
          />
        </TextInput>
      </View>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.items}>
            <Image source={item.image} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default DisplayAnImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  background: {
    position: 'absolute',
    backgroundColor: '#f5ceb8',
    width: '100%',
  },
  text: {
    color: '#222b45',
    fontSize: 45,
    fontWeight: 'bold',
    paddingTop: 20,
    marginHorizontal: 20,
  },
  viewSearch: {
    paddingTop: 10,
    marginHorizontal: 20,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  items: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '45%',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
});
