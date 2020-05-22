/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Image, Text } from 'react-native';
const DisplaySymptom = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.background}>
                    <Image style={{ position: 'absolute' }} source={require('../images/virus.png')} />

                    <View style={styles.viewcontainer}>
                        <Image style={styles.image_header}
                            source={require('../images/coronadr.png')} />
                        <Text style={styles.title_header}>Get to know about Covid-19</Text>
                    </View>

                </View>
                <Text style={styles.title}>Symptoms</Text>

                <View style={styles.viewSymptom}>

                    <View style={styles.viewHead}>
                        <Image source={require('../images/headache.png')} />
                        <Text>Headache</Text>
                    </View>

                    <View style={styles.viewHead}>
                        <Image source={require('../images/caugh.png')} />
                        <Text>Caugh</Text>
                    </View>

                    <View style={styles.viewHead}>
                        <Image source={require('../images/fever.png')} />
                        <Text>Fever</Text>
                    </View>

                </View>
                <Text style={styles.txtPrevention}>Prevention</Text>

                <View style={styles.viewWash}>

                    <Image style={styles.img_pre} source={require('../images/wear_mask.png')} />

                    <View style={styles.viewContent}>
                        <Text style={styles.title_wear}>Wear face mask</Text>
                        <Text>Use the online image color picker right to select a color and get the HTML Color Code of this pixel.</Text>
                    </View>

                    <View style={styles.next}>
                        <Image source={require('../images/next.png')} />
                    </View>

                </View>
                <View style={styles.viewWash}>

                    <Image style={styles.img_pre} source={require('../images/wash_hands.png')} />

                    <View style={styles.viewContent}>
                        <Text style={styles.title_wear}>Wash your hand</Text>
                        <Text>Use the online image color picker right to select a color and get the HTML Color Code of this pixel.</Text>
                    </View>

                    <View style={styles.next}>
                        <Image source={require('../images/next.png')} />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    );
};
export default DisplaySymptom;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcf9f9',

    },
    background: {
        backgroundColor: '#2864be',
        overflow: 'hidden',
        height: 1000,
        width: 1000,
        borderRadius: 1000,
        marginTop: -750,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    viewcontainer: {
        marginBottom: 100,
        height: 160,
        flexDirection: 'row',
    },
    image_header: {
        marginLeft: 40,
        marginTop: 50,
    },
    title_header: {
        color: 'white',
        fontSize: 25,
        width: '30%',
        marginTop: 70,
        marginLeft: -70,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 10,
    },
    viewSymptom: {
        flexDirection: 'row',
        marginHorizontal: 20,
        padding: 10,
    },
    viewHead: {
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
    },
    txtPrevention: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    viewWear: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    title_wear: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewWash: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#ffffff',
    },
    viewContent: {
        flex: 1,
        alignItems: 'center',
    },
    next: {
        justifyContent: 'flex-end',
    },
});
