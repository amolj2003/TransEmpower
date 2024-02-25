import { StyleSheet, Image } from 'react-native';
import { router } from "expo-router";
import { BounceInRight, FadeIn, BounceIn, BounceOut, BounceInLeft } from 'react-native-reanimated';
import React, { useEffect } from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  useEffect(() => {
    setTimeout(() => { router.replace("/two") }, 6500);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View entering={BounceInLeft.duration(500).delay(2000)} style={{ flexDirection: 'row' }}>
        <Image source={require("../../assets/images/toilet.png")} style={{ height: 34, width: 34, top: 42, start: 10 }} />
        <Text style={{ fontSize: 25, paddingLeft: 45, top: 45, position: 'absolute', color: '#ff91e4' }}> Safety</Text>

      </Animated.View>

      <Animated.View entering={BounceInRight.duration(500).delay(2500)} style={{ flexDirection: 'row' }}>
        <Image source={require("../../assets/images/graduation.png")} style={{ height: 34, width: 34, top: 83, end: 5, position: 'absolute' }} />
        <Text style={{ fontSize: 25, padding: 20, top: 65, right: 28, position: 'absolute', color: '#6ec5ff' }}> Education</Text>
      </Animated.View>

      <Animated.View entering={BounceInLeft.duration(500).delay(3000)} style={{ flexDirection: 'row' }}>
        <Image source={require("../../assets/images/suitcase.png")} style={{ height: 34, width: 34, top: 175, start: 10, position: 'absolute' }} />
        <Text style={{ fontSize: 25, paddingLeft: 45, top: 180, position: 'absolute', color: '#ff91e4' }}> Job Opening</Text>
      </Animated.View>

      <Animated.View entering={BounceInRight.duration(500).delay(3500)} style={{ flexDirection: 'row' }}>
        <Image source={require("../../assets/images/meeting.png")} style={{ height: 34, width: 34, top: 560, end: 10, position: 'absolute' }} />
        <Text style={{ fontSize: 25, paddingRight: 50, top: 565, position: 'absolute', right: 0, color: '#ff91e4' }}> Meet Ups </Text>
      </Animated.View>

      <Animated.View entering={BounceInLeft.duration(500).delay(4000)} style={{ flexDirection: 'row' }}>
        <Image source={require("../../assets/images/group.png")} style={{ height: 34, width: 34, top: 665, start: 10, position: 'absolute' }} />
        <Text style={{ fontSize: 25, paddingRight: 50, top: 670, position: 'absolute', left: 45, color: '#6ec5ff' }}> Community Forums</Text>
      </Animated.View>

      <Animated.View entering={BounceInRight.duration(500).delay(4500)} style={{ flexDirection: 'row' }}>
        <Image source={require("../../assets/images/fist.png")} style={{ height: 34, width: 34, top: 755, end: 10, position: 'absolute' }} />
        <Text style={{ fontSize: 25, paddingRight: 50, top: 762, position: 'absolute', right: 0, color: '#ff91e4' }}> Rights </Text>
      </Animated.View>



      <Animated.View entering={FadeIn.duration(1000)} exiting={BounceOut} style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: '28%'
      }}>
        <Image
          source={require("../../assets/images/Logo.jpg")}
          style={{ width: 250, height: 250, alignContent: 'center' }}
        />
        <View style={{ flexDirection: "row", alignContent: 'center' }}>
          <Text style={{ fontSize: 35, fontWeight: '600', color: '#ff91e4' }}>Trans</Text>
          <Text style={{ fontSize: 35, fontWeight: '600', color: '#6ec5ff' }}>Empower</Text>
        </View>

      </Animated.View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
