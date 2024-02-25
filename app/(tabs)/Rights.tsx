import { StyleSheet, Image, Pressable, TextInput, ScrollView } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { router } from 'expo-router';
import { Right } from '../../constants/Data'
import Heading from '@/components/Heading';

export default function Community() {
    return (
        <View style={styles.container}>
            <Heading name={"Rights"} logo={"../assets/images/fist.png"} placeholder="Search Courses...." />
            <ScrollView>
                {Right.map((course, index) => (
                    <View key={course.id} style={styles.Main} >
                        <Image style={styles.Image}
                            source={{ uri: course.image }} />
                        <View style={styles.TextMain}>
                            <Text style={styles.Heading}>{course.Heading}</Text>
                            <Text style={styles.SubHeading}>{course.Subheading} </Text>
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
        height: '200%',
        width: '95%',
        backgroundColor: 'White',
        marginHorizontal: 'auto',
        marginTop: 34,
        borderTopStartRadius: 34,
        borderTopEndRadius: 34,
        paddingBottom: 7
    },
    Image: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 30
    },
    TextMain:
    {
        position: 'absolute',
        height: '30%',
        width: '100%',
        bottom: 0,
        paddingBottom: 30
    },
    Heading:
    {
        fontSize: 25,
        fontWeight: '700',
        marginHorizontal: 'auto',
        paddingTop: 12
    },
    SubHeading: {
        fontSize: 15,
        marginHorizontal: 'auto',
        paddingTop: 12,
        paddingLeft: 7,
        paddingRight: 7
    },


});

