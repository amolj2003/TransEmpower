import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { BellIcon } from "react-native-heroicons/outline";
import Heading from '@/components/Heading';
import { jobs } from '@/constants/Data';
export default function Job() {


    const jobNames = [
        { id: 1, name: "Software Engineer" },
        { id: 2, name: "Data Analyst" },
        { id: 3, name: "Web Developer" },
        { id: 4, name: "Machine Learning Engineer" },
        { id: 5, name: "Artificial Intelligence Specialist" },
        { id: 6, name: "Mobile App Developer" },
        { id: 7, name: "Database Administrator" },
        { id: 8, name: "Cybersecurity Analyst" },
        { id: 9, name: "Network Administrator" },
        { id: 10, name: "Cloud Computing Specialist" },
        { id: 11, name: "Digital Marketing Specialist" },
        { id: 12, name: "Graphic Designer" },
        { id: 13, name: "User Experience Designer" },
        { id: 14, name: "Project Manager" },
        { id: 15, name: "Business Analyst" },
        { id: 16, name: "Financial Accountant" },
        { id: 17, name: "Psychologist" },
        { id: 18, name: "Historian" },
        { id: 19, name: "Writer" },
        { id: 20, name: "Philosopher" }
    ]


    const getRandomColor = () => {
        const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845', '#FFC300'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <View style={styles.container}>
            <Heading name={"Jobs"} logo={"../assets/images/suitcase.png"} placeholder="Search Jobs...." />


            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <View style={{ height: '18%', width: '95%', backgroundColor: '#f972e3', margin: 8, borderRadius: 30 }}>
                    <Image style={{ position: 'absolute', height: '100%', width: '100%', borderRadius: 30, }}
                        source={require("../../assets/images/Hire.jpg")}
                    />
                </View>
                {
                    jobs.map((job, index) => (
                        <View key={job.id} style={{ height: '20%', borderRadius: 20, width: '46%', backgroundColor: job.id % 2 == 0 ? '#6ec5ff' : '#ff91e4', margin: '2%' }}>
                            <Image
                                source={{ uri: job.image }}
                                style={{ width: '100%', height: '70%', borderTopLeftRadius: 20, borderTopRightRadius: 20, alignContent: 'center' }}
                            />
                            <Text style={{ paddingLeft: 8, fontSize: 20, marginHorizontal: 'auto', fontWeight: '600' }}>
                                {job.title}
                            </Text>
                            <Text style={{ paddingLeft: 8, fontSize: 15, paddingTop: 2, fontFamily: 'sans', overflow: 'hidden' }}>
                                {job.description}
                            </Text>
                        </View>
                    ))
                }

                <View style={{ paddingTop: 10 }}>
                    <Text style={styles.featureText}> Job Category</Text>

                    <View style={styles.sizeBox}>
                        {jobNames.map(item => (
                            <View
                                key={item.id}
                                style={{
                                    display: 'flex',
                                    height: 'auto',
                                    width: '120%',
                                    borderRadius: 50,
                                    borderWidth: 1,
                                    padding: 14,
                                    marginLeft: 20,
                                    margin: 5,

                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 20,
                                        top: "30%",
                                        textAlign: 'center',
                                        color: '#6f00f3',

                                    }}
                                >
                                    {item.name}
                                </Text>
                            </View>
                        ))}
                    </View>

                </View>



            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    sizeBox: {


        padding: 12,
    },
    featureText: {
        paddingLeft: 15,
        fontSize: 20,
        fontWeight: "600",
    },

});