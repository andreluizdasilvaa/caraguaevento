import { useWindowDimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import {
    Animated,
    StyleSheet
} from 'react-native';

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
          {data.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 25, 10],
              extrapolate: 'clamp',
            })

            return <Animated.View key={i} style={[styles.Dot, { width: dotWidth }]} />
          })}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 3,
    backgroundColor: '#fff'
  },
  Dot: {
      height: 10,
      borderRadius: 5,
      backgroundColor: '#00A5CF',
      margin: 0,
      marginVertical: 'auto'
  }
});