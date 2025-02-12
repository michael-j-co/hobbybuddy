import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinkText from './LinkText';
import CustomText from './CustomText';
const PointBalance = ({ points, navigation }) => {
  return (
    <View style={styles.container}>
      <CustomText type = "body" style={styles.pointBalanceText}>Point Balance: {points}</CustomText>
      <View style={styles.pointLinks}>
        <LinkText text="Redeem" onPress={() => navigation.navigate('RedeemPoints')} />
        <LinkText text="Points History" onPress={() => navigation.navigate('PointsHistory')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 43,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pointBalanceText: {
    color: '#003F5C',
  },
  pointLinks: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default PointBalance;
