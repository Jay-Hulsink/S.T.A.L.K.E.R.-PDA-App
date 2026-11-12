import * as Device from 'expo-device';
import { Platform, StyleSheet, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.HoloOverlay}>
        <View style={styles.HoloTabList}>
          <Pressable onPress={onPressFunction} style={styles.HoloTab}>
            <Text style={styles.HoloTabText}>bazinga</Text>
          </Pressable>
        </View>
      </View>
  </SafeAreaView>
  );
}

function onPressFunction () {
  //
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#1a2221',
    color: '#FFFFFF',
  },
  HoloOverlay: {
    flex: 1,
    margin: 25,
    backgroundColor: '#52525287',
    borderWidth: 1,
    borderColor: '#7e7e7eaf',
    padding: 5,
  },
  HoloTabList: {
    flex: 1,
    margin: 25,
    backgroundColor: '#52525287',
    borderWidth: 1,
    borderColor: '#7e7e7eaf',
    padding: 5,
    paddingHorizontal: 10,
    maxHeight: 50,
  },
  HoloTab: {
    flex: 1,
    margin: 0,
    backgroundColor: '#52525287',
    borderWidth: 1,
    borderColor: '#7e7e7eaf',
    padding: 5,
    maxWidth: 100,
    transform: [{ skewX: '-20deg' }],
  },
  HoloTabText: {
    textAlign: 'center',
    transform: [{ skewX: '20deg' }],
  }
});
