import { StyleSheet, Image, Pressable, TextInput, ImageBackground, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { router } from 'expo-router';
import Heading from '@/components/Heading';
import { meet } from '../../constants/Data'
export default function Community() {


    return (
        <View style={styles.container}>
            <Heading name={"Meet-Ups"} logo={"../assets/images/graduation.png"} placeholder="Search Courses...." />
            <ScrollView>
                <Text style={styles.Heading}>
                    Explore New Communities
                </Text>
                {meet.map((item, index) => (
                    <View key={item.id || index} style={styles.Box}>

                        <View style={{ backgroundColor: '#6ec5ff', borderRadius: 20, width: 280 }}>
                            <Text style={styles.Text}>{item.address}</Text>
                            <Text style={styles.date}>{item.upcoming_date}</Text>
                            <Text style={styles.Time}>{item.timings}</Text>
                        </View>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 130, height: 130, borderRadius: 10, position: 'absolute', top: '10%', end: 10, }}
                        />


                    </View>))
                }
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: '120%',
        height: '106%',
        position: 'absolute',
    },
    Heading: {
        fontSize: 25,
        padding: 20,
        fontWeight: '600',
        marginLeft: 10
    },
    Box:
    {
        flexDirection: 'row',
        height: '17%',
        width: '90%',
        backgroundColor: '#ff91e4',
        marginHorizontal: 'auto',
        borderRadius: 20,
        marginVertical: 10

    },
    image: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
        borderRadius: 20
    },
    Text: {
        padding: 20,

        fontSize: 25,
        width: 250,
        fontWeight: '600',
        fontFamily: 'sans-sanrif'
    },

    inputText: {
        fontSize: 20,
        marginBottom: 1,
        paddingLeft: 20,
        height: "auto",
        outlineStyle: "none",
    },
    date: {

        fontSize: 20,
        bottom: 2,
        padding: 8,
        paddingLeft: 26
    },
    Time: {

        fontSize: 18,
        bottom: 10,
        padding: 8,
        paddingLeft: 26
    },
});