/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
const DATA = [
  {
    image: require('../images/logotype.png'),
    title: 'Diet Fitness',
  },
  {
    image: require('../images/logotype.png'),
    title: 'Exercises',
  },
  {
    image: require('../images/logotype.png'),
    title: 'Third Item1',
  },
  {
    image: require('../images/logotype.png'),
    title: 'Third Item',
  },
  {
    image: require('../images/logotype.png'),
    title: 'Third Item3',
  },
  {
    image: require('../images/logotype.png'),
    title: 'Third Item4',
  },
  {
    image: require('../images/logotype.png'),
    title: 'Third Item6',
  },
  {
    image: require('../images/logotype.png'),
    title: 'Third Item9',
  },
  {
    image: require('../images/logotype.png'),
    title: 'Third Item10',
  },
  {
    image: require('../images/logotype.png'),
    title: 'Third Item2',
  },
];
const DisplayApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Image
          style={styles.imgBackground}

          source={require('../images/img-se.png')}
        />
      </View>

      <Text style={styles.title}>Meditation</Text>
      <Text style={styles.min}>3 - 120 MIN Course</Text>
      <Text style={styles.content}>
        Use the online image color picker right to select a color and get the
        HTML Color Code of this pixel. Also you get the HEX color code value,
        RGB value
      </Text>

      <TextInput style={styles.searchInput}>
        <Image style={styles.search} source={require('../images/search.png')} />
        <Text>Search</Text>
      </TextInput>

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
    </SafeAreaView >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  background: {
    backgroundColor: '#c7b8f5',
    position: 'absolute',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: '#222b45',
  },
  min: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    width: '70%',
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '50%',
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  items: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '45%',
    alignItems: 'center',
  },
  itemTitle: {
    paddingLeft: 5,
  },
});
export default DisplayApp;
