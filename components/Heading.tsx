import { Pressable, TextInput, View, Text } from "react-native";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StyleSheet, Image } from 'react-native';
import { router } from "expo-router";

export default function Heading({ name, logo, placeholder }: {
    name: string;
    logo: string;
    placeholder: string
}) {
    //logo
    // search placeholder
    // heading
    return (
        <>
            <View style={styles.Main}>
                <View style={styles.Mainone}>
                    <Image source={{ uri: logo }} style={styles.image} />
                    <Text style={styles.Text}> {name}</Text>
                </View>
                <Pressable onPress={() => router.replace("/two")} >
                    <BellIcon size={35} style={{ paddingTop: 18 }} />
                </Pressable>

            </View>
            <View style={styles.MainTwo} />
            {/* Search Input */}
            <View style={{ zIndex: 1 }}>
                <View style={styles.search}>
                    <Pressable onPress={() => router.replace("/two")}>
                        < MagnifyingGlassIcon size={30} style={styles.Magnifying} />
                    </Pressable>
                    <TextInput placeholder={placeholder} placeholderTextColor={"black"} style={styles.inputText} />
                </View>
            </View >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    Main: {
        marginHorizontal: 10, marginTop: 10, flexDirection: "row", alignContent: 'center', justifyContent: 'space-between'
    },

    inputText: {
        fontSize: 20,
        marginBottom: 1,
        paddingLeft: 20,
        height: "auto",
        outlineStyle: "none",
    },
    Mainone: {
        flexDirection: "row",
        alignContent: 'center'
    },
    image: {
        width: 60,
        height: 60,
        alignContent: 'center'
    },
    Text: {
        paddingTop: 15,
        fontSize: 35,
        fontWeight: '600',
        color: '#000000'
    },
    MainTwo: {
        paddingTop: 5,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    search: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        height: "auto",
        width: '90%',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 'auto',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -1, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        position: 'relative',
        top: 0,
        zIndex: 1
    },
    Magnifying: {
        padding: 1,
        alignContent: "center",
        height: "auto"
    },
});