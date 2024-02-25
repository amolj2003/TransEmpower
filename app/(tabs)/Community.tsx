import { StyleSheet, Image, Pressable, TextInput, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { router } from 'expo-router';
import Heading from '@/components/Heading';
import { communityForum } from '@/constants/Data';
export default function Community() {


    return (
        <View style={styles.container}>
            <Heading name={"Community "} logo={"../assets/images/group.png"} placeholder="Search Community...." />
            <ScrollView>
                {communityForum.map((course, index) => (
                    <View style={styles.Main} key={index}>
                        <Image
                            source={{ uri: course.image }}
                            style={styles.image}
                        />
                        <Text style={styles.Heading}>{course.topic}</Text>
                        <Text style={styles.JoinNow}>Join Now</Text>
                        <View style={styles.Mainone}>
                            <Text style={styles.Comment}>{course.comments}</Text>
                        </View>
                    </View>
                ))
                }
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    inputText: {
        fontSize: 20,
        marginBottom: 1,
        paddingLeft: 20,
        height: "auto",
        outlineStyle: "none",
    },
    Main: {
        flexDirection: 'row',
        height: '13%',
        width: '95%',
        backgroundColor: '#6ec5ff',
        margin: 'auto',
        marginTop: 30,
        borderRadius: 20
    },
    image: {
        paddingVertical: 10,
        width: 100,
        height: 120,
        borderRadius: 10,
        marginHorizontal: 8,
        alignContent: 'center',
        marginTop: 10,
        marginRight: 15
    },
    Heading: {
        paddingVertical: 25,
        width: 160,
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'sans'
    },
    JoinNow: {
        position: 'absolute',
        end: 0,
        backgroundColor: '#ff91e4',
        height: '28%',
        width: 'auto',
        paddingHorizontal: 10,
        color: 'white',
        borderRadius: 5,
        fontSize: 25
    },
    Mainone: {
        backgroundColor: '#6ec5ff',
        height: 40,
        width: 40,
        borderRadius: 30,
        position: 'absolute',
        end: 20,
        bottom: 20
    },
    Comment: {
        alignItems: 'center',
        textAlign: 'center',
        marginVertical: 'auto',
        fontWeight: '900',
        fontSize: 28
    }
});