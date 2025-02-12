import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useAvatar } from '../context/AvatarContext';
import PageHeader from '../components/PageHeader';
import CustomText from '../components/CustomText';
import ActionButton from '../components/ActionButton';
import { Ionicons } from '@expo/vector-icons';

// Sample accessories
const accessories = [
  { id: '1', name: 'Hat', source: require('../../assets/dog.png') },
  { id: '2', name: 'Glasses', source: require('../../assets/dog.png') },
  { id: '3', name: 'Scarf', source: require('../../assets/dog.png') },
];

// Sample backgrounds
const backgrounds = [
  { id: '1', name: 'Forest', source: require('../../assets/dog.png') },
  { id: '2', name: 'City', source: require('../../assets/dog.png') },
  { id: '3', name: 'Beach', source: require('../../assets/dog.png') },
];

const AccessoryCustomizationScreen = ({ navigation }) => {
  const { selectedAvatar, updateAvatarCustomization } = useAvatar();
  const [selectedAccessory, setSelectedAccessory] = useState(selectedAvatar.accessory || null);
  const [selectedBackground, setSelectedBackground] = useState(selectedAvatar.background || null);

  // Function to apply selection instantly
  const applySelection = (type, item) => {
    if (type === 'accessory') setSelectedAccessory(item);
    if (type === 'background') setSelectedBackground(item);
  };

  // Save changes and navigate back
  const handleSubmit = () => {
    updateAvatarCustomization({ accessory: selectedAccessory, background: selectedBackground });
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Customize Avatar" />

      {/* Avatar Preview with Background Layering */}
      <View style={styles.avatarContainer}>
        {selectedBackground && <Image source={selectedBackground.source} style={styles.backgroundImage} />}
        <Image source={selectedAvatar.source} style={styles.avatarImage} />
        {selectedAccessory && <Image source={selectedAccessory.source} style={styles.accessoryImage} />}
      </View>

      {/* Accessories Carousel */}
      <CustomText type="header" style={styles.sectionTitle}>Select an Accessory</CustomText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {accessories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.itemContainer, selectedAccessory?.id === item.id && styles.selectedItem]}
            onPress={() => applySelection('accessory', item)}
          >
            <Image source={item.source} style={styles.itemImage} />
            <CustomText type="body">{item.name}</CustomText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Backgrounds Carousel */}
      <CustomText type="header" style={styles.sectionTitle}>Select a Background</CustomText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {backgrounds.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.itemContainer, selectedBackground?.id === item.id && styles.selectedItem]}
            onPress={() => applySelection('background', item)}
          >
            <Image source={item.source} style={styles.itemImage} />
            <CustomText type="body">{item.name}</CustomText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Submit Button */}
      <ActionButton label="Submit Changes" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 25,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 200,
    height: 200,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  avatarImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  accessoryImage: {
    position: 'absolute',
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 18,
    alignSelf: 'center',
  },
  carousel: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedItem: {
    borderColor: '#007BFF',
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default AccessoryCustomizationScreen;
