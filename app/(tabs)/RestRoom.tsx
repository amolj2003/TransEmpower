import React from 'react';
import {
    StyleSheet,
    Image,
    Pressable,
    TextInput,
    ImageBackground
} from 'react-native';
import {
    Text,
    View
} from '@/components/Themed';
import {
    ArrowLeftIcon,
    BellIcon,
    MagnifyingGlassCircleIcon,
    MagnifyingGlassIcon
} from "react-native-heroicons/outline";
import { router } from 'expo-router';
import Heading from '@/components/Heading';

export default function RestRooms() {
    return (
        <View style={styles.container}>
            <Heading name={"Rest Room"} logo={"../assets/images/toilet.png"} placeholder="Search Rest Room...." />
            <Image style={styles.image}
                source={require("../../assets/images/Map.jpeg")}>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        marginTop: 10,
        width: '130%',
        height: '100%',
        paddingLeft: 650,
        marginRight: 90
    },
    inputText: {
        fontSize: 20,
        marginBottom: 1,
        paddingLeft: 20,
        height: "auto",
        outlineStyle: "none",
    },

});
