import { StyleSheet, Image, Pressable } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { BellIcon } from "react-native-heroicons/outline";
import { router } from 'expo-router';
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>

      <View style={{ marginHorizontal: 10, marginTop: 10, flexDirection: "row", alignContent: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: "row", alignContent: 'center' }}>
          <Image
            source={require("../../assets/images/Logo.jpg")}
            style={{ width: 60, height: 60, alignContent: 'center' }}
          />
          <Text style={{ paddingTop: 15, fontSize: 35, fontWeight: '600', color: '#ff91e4' }}>Trans</Text>
          <Text style={{ paddingTop: 15, fontSize: 35, fontWeight: '600', color: '#6ec5ff' }}>Empower</Text>

        </View>
        <BellIcon size={35} style={{ paddingTop: 18 }} />
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,

        }}
      />
      <View style={{ flexDirection: 'row', marginTop: 30, padding: 18, justifyContent: 'space-between' }}>
        <Pressable onPress={() => router.replace("/RestRoom")}>
          <View style={{ backgroundColor: '#ff91e4', height: 180, width: 180, borderRadius: 17 }}>
            <Image
              source={require("../../assets/images/toilet.png")}
              style={{ width: 90, height: 90, start: '22%', top: 25, alignItems: 'center' }}
            />
            <Text style={{ fontSize: 20, marginHorizontal: '10%', paddingStart: 15, bottom: 10, position: 'absolute', fontWeight: '600' }}>
              RestRooms
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.replace("/Education")}>
          <View style={{ backgroundColor: '#6ec5ff', height: 180, width: 180, borderRadius: 17 }}>
            <Image
              source={require("../../assets/images/graduation.png")}
              style={{ width: 90, height: 90, start: '22%', top: 25, alignItems: 'center' }}
            />
            <Text style={{ fontSize: 20, marginHorizontal: '15%', paddingStart: 12, bottom: 10, position: 'absolute', fontWeight: '600' }}>
              Education
            </Text>
          </View>
        </Pressable>
      </View>


      <View style={{ flexDirection: 'row', marginTop: 30, padding: 18, justifyContent: 'space-between' }}>
        <Pressable onPress={() => router.replace("/Job")}>
          <View style={{ backgroundColor: '#6ec5ff', height: 180, width: 180, borderRadius: 17 }}>
            <Image
              source={require("../../assets/images/suitcase.png")}
              style={{ width: 80, height: 80, start: '23%', top: 18, alignItems: 'center' }}
            />
            <Text style={{ fontSize: 20, marginHorizontal: '10%', paddingStart: 7, bottom: 10, position: 'absolute', fontWeight: '600' }}>
              Job Opportunity
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.replace("/Rights")}>
          <View style={{ backgroundColor: '#ff91e4', height: 180, width: 180, borderRadius: 17 }}>
            <Image
              source={require("../../assets/images/fist.png")}
              style={{ width: 90, height: 90, start: '22%', top: 25, alignItems: 'center' }}
            />
            <Text style={{ fontSize: 20, marginHorizontal: '26%', paddingStart: 5, bottom: 10, position: 'absolute', fontWeight: '600' }}>
              Rights
            </Text>
          </View>
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 30, padding: 18, justifyContent: 'space-between' }}>
        <Pressable onPress={() => router.replace("/Community")}>
          <View style={{ backgroundColor: '#ff91e4', height: 180, width: 180, borderRadius: 17 }}>
            <Image
              source={require("../../assets/images/group.png")}
              style={{ width: 70, height: 70, start: '28%', top: 25, alignItems: 'center' }}
            />
            <Text style={{ fontSize: 20, marginHorizontal: '12%', paddingStart: 5, bottom: 10, position: 'absolute', fontWeight: '600' }}>
              Community Forums
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.replace("/Meet")}>
          <View style={{ backgroundColor: '#6ec5ff', height: 180, width: 180, borderRadius: 17 }}>
            <Image
              source={require("../../assets/images/meeting.png")}
              style={{ width: 90, height: 90, start: '22%', top: 25, alignItems: 'center' }}
            />
            <Text style={{ fontSize: 20, marginHorizontal: '18%', paddingStart: 10, bottom: 10, position: 'absolute', fontWeight: '600' }}>
              Meet-ups
            </Text>
          </View>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});
