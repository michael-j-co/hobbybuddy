import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ children, style, type = 'body', weight = '400', ...props }) => {
  // Define fontFamily dynamically based on the type
  let fontFamily = 'Montserrat'; // Default to Montserrat for all types
  if (type === 'body') fontFamily = 'Lato';
  if (type === 'button') fontFamily = 'Nunito';

  // Merge dynamic styles with props
  const fontStyle = [
    {
      fontFamily, // Dynamic font family
      fontWeight: weight, // Dynamic font weight for variable fonts
    },
    styles[type] || styles.body, // Default to 'body' if type is unknown
    style, // Allow user to override styles
  ];

  return (
    <Text style={fontStyle} allowFontScaling {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003F5C',
  },
  headerSemiBold: {
    fontSize: 24,
    fontWeight: '600', // Semi-bold weight
    color: '#003F5C',
  },
  body: {
    fontSize: 16,
    color: '#555',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
  dayLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#555',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  shareLink: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default CustomText;
