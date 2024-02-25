import { StyleSheet, Image, Pressable, TextInput, ScrollView } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { courses } from '@/constants/Data';
import Heading from '@/components/Heading';
export default function Education() {

    return (
        <View style={styles.container}>
            <Heading name={"Education"} logo={"../assets/images/graduation.png"} placeholder="Search Jobs...." />

            <ScrollView>
                <Image
                    source={require("../../assets/images/Course.png")}
                    style={{ width: 10, height: '58%', marginHorizontal: 'auto', paddingHorizontal: 200, marginTop: 30 }}
                />
                <Text style={{ fontSize: 30, fontWeight: '600', padding: 20 }}>
                    Course
                </Text>

                {courses.map((course, index) => (
                    <View key={course.id} style={{ borderColor: 'black', height: '120%', width: '98%', backgroundColor: 'white', marginBottom: 20, borderRadius: 20 }}>
                        <Image
                            source={{ uri: course.image }} style={{ height: '60%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <Text style={{ position: 'absolute', top: '61%', marginHorizontal: 'auto', fontSize: 25, padding: '2%', fontWeight: '600' }}>
                            {course.title}
                        </Text>
                        <Text style={{ position: 'absolute', top: '79%', marginHorizontal: 'auto', fontSize: 20, padding: '2%', }}>
                            {course.description}<Text style={{ fontWeight: '600', fontSize: 16 }}> Read More</Text>
                        </Text>
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

});
