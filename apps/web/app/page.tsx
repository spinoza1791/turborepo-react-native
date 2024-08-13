// page.tsx
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '@repo/ui';

export default function Page() {
  const headerFadeAnim = useRef(new Animated.Value(0)).current;
  const buttonScaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headerFadeAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true, 
    }).start();

    Animated.timing(buttonScaleAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: true, 
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.header, { opacity: headerFadeAnim }]}>
        Native
      </Animated.Text>

      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ scale: buttonScaleAnim }] },
        ]}
      >
        <Button
          onClick={() => {
            console.log('Pressed!');
            alert('Pressed!');
          }}
          text="BoopAnimated"
        />
      </Animated.View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
  buttonContainer: {
    // No need for specific styles here, as animation handles scaling
  },
});
