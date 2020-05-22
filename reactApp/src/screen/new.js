/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
const DisplayNews = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.background}>
                    <Image style={{ position: 'absolute' }} source={require('../images/virus.png')} />
                    <View style={{ height: 220, flexDirection: 'row' }}>
                        <Image
                            style={styles.image_header}
                            source={require('../images/drcoro.png')}
                        />
                        <Text style={styles.title_header}>All you need is stay at home</Text>
                    </View>
                </View>

                <View style={styles.content}>

                    <TouchableOpacity style={styles.touchLocation}>
                        <View style={styles.viewLocation}>
                            <Image source={require('../images/location.png')} />
                            <Text style={styles.text}>Vietnam</Text>
                        </View>
                        <Image style={styles.arrowDown} source={require('../images/arrowDown.png')} />
                    </TouchableOpacity>

                    <View style={styles.viewUpdate}>
                        <View style={styles.txtUpdate}>
                            <Text style={styles.txtcase}> Case updates</Text>
                            <Text style={styles.txtdate}> Newest update March 22</Text>
                        </View>
                        <Text style={styles.txtdetail}>See details</Text>
                    </View>
                </View>
                <View style={styles.statistical}>
                    <View style={styles.viewInfected}>
                        <Image source={require('../images/yellowdot.png')} />
                        <Text style={styles.numInfected}>2000</Text>
                        <Text style={styles.txtInfected}>Infected</Text>
                    </View>
                    <View style={styles.viewDeath}>
                        <Image source={require('../images/reddot.png')} />
                        <Text style={styles.numDeath}>800</Text>
                        <Text style={styles.txtDeath}>Deaths</Text>
                    </View>
                    <View style={styles.viewRecovered}>
                        <Image source={require('../images/greendot.png')} />
                        <Text style={styles.numRecovered}>1000</Text>
                        <Text style={styles.txtRecovered}>Recovered</Text>
                    </View>
                </View>
                <View style={styles.spread}>
                    <Text style={styles.txtvirus}>Spread of virus</Text>
                    <Text style={styles.txtvirusdetail}>See Details</Text>
                </View>

                <View style={styles.img_map}>
                    <Image source={require('../images/map.png')} />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};
export default DisplayNews;
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
        marginTop: -730,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title_header: {
        color: 'white',
        fontSize: 25,
        width: '15%',
        marginTop: 30,
        marginLeft: -50,
    },
    touchLocation: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 15,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        paddingVertical: 10,
        borderRadius: 20,
    },
    viewLocation: {
        flex: 1,
        flexDirection: 'row',
    },
    viewUpdate: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    txtUpdate: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtcase: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtdetail: {
        color: '#498fd1',
        fontWeight: 'bold',
    },
    statistical: {
        marginVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        padding: 10,
    },
    viewInfected: {
        flex: 1,
        alignItems: 'center',
    },
    viewDeath: {
        flex: 1,
        alignItems: 'center',
    },
    viewRecovered: {
        alignItems: 'center',
        flex: 1,
    },
    numInfected: {
        fontSize: 35,
        color: '#ff7f00',
    },
    numDeath: {
        fontSize: 35,
        color: '#bf0000',
    },
    numRecovered: {
        fontSize: 35,
        color: '#00bf00',
    },
    spread: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    txtvirus: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtvirusdetail: {
        fontWeight: 'bold',
        color: '#498fd1',
    },
    img_map: {
        marginHorizontal: 20,
        backgroundColor: '#ffffff',
        padding: 10,
        overflow: 'hidden',
    },
});
