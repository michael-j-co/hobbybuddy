import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import PageHeader from '../components/PageHeader';
import AvatarWithMessage from '../components/AvatarWithMessage';
import CustomText from '../components/CustomText';

const ResourceListScreen = ({ route, navigation }) => {
  const { category } = route.params;

  const [savedResources, setSavedResources] = useState([]);

  const resources = {
    buy: [
      {
        id: 1,
        title: 'Hiking boots',
        description: 'They are designed to protect your feet.',
        links: ['Amazon (Sponsored)', 'REI'],
      },
      {
        id: 2,
        title: 'Hiking Clothing',
        description: 'They are designed to provide you comfort, warmth, and airflow.',
        links: ['Amazon (Sponsored)', 'Patagonia'],
      },
    ],
    learn: [
        {
          id: 1,
          title: 'Hiking boots',
          description: 'They are designed to protect your feet.',
          links: ['Amazon (Sponsored)', 'REI'],
        },
        {
          id: 2,
          title: 'Hiking Clothing',
          description: 'They are designed to provide you comfort, warmth, and airflow.',
          links: ['Amazon (Sponsored)', 'Patagonia'],
        },
      ],
    practice: [
        {
          id: 1,
          title: 'Hiking boots',
          description: 'They are designed to protect your feet.',
          links: ['Amazon (Sponsored)', 'REI'],
        },
        {
          id: 2,
          title: 'Hiking Clothing',
          description: 'They are designed to provide you comfort, warmth, and airflow.',
          links: ['Amazon (Sponsored)', 'Patagonia'],
        },
      ],
    
  };

 

  return (
    <View style={styles.container}>
      <PageHeader
        title={category === 'buy' ? 'What To Buy' : category === 'learn' ? 'Learn More' : category === 'practice' ? 'How To Practice' : 'Saved Resources'}
        onBackPress={() => navigation.goBack()}
      />
      <AvatarWithMessage
        source={require('../../assets/dog.png')}
        name="Playful Penelope"
        motivation={
          category === 'buy'
            ? 'Here are some things you can buy!'
            : category === 'learn'
            ? 'Here is how you can learn more!'
            : category === 'practice'
            ? 'Here is how you can practice!'
            : 'Here are your saved resources!'
        }
      />
      <ScrollView contentContainerStyle={styles.listContainer}>
        {resources[category]?.map((resource) => (
          <View key={resource.id} style={styles.card}>
            <CustomText type="header" style={styles.title}>{resource.title}</CustomText>
            <CustomText type="body" style={styles.description}>{resource.description}</CustomText>
            <CustomText type="body" style={styles.linksHeader}>You can buy them from:</CustomText>
            {resource.links.map((link, index) => (
              <CustomText key={index} type="body" style={styles.link}>-- {link}</CustomText>
            ))}
            
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 10,
    fontSize: 14,
    color: '#555',
  },
  linksHeader: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    color: '#007BFF',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  customButton: {
    height: 40,
    width: 100,
    borderWidth: 2,
    borderColor: '#003F5C', // Dark blue outline
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#003F5C', // Dark blue text
  },
});

export default ResourceListScreen;