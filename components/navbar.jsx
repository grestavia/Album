import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState('Library');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'Library' && styles.activeTab]}
        onPress={() => handleTabPress('Library')}
      >
        <Icon
        name='collections'
        type='material'
        />
        <Text style={[styles.tabText, activeTab === 'Library' && styles.textOnActiveTab]}>Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'For You' && styles.activeTab]}
        onPress={() => handleTabPress('For You')}
      >
        <Icon
        name='library-books'
        type='material'
        />
        <Text style={[styles.tabText, activeTab === 'For You' && styles.textOnActiveTab]}>For You</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'Albums' && styles.activeTab]}
        onPress={() => handleTabPress('Albums')}
      >
        <Icon 
        name='view-agenda'
        type='material'
        />
        <Text style={[styles.tabText, activeTab === 'Albums' && styles.textOnActiveTab]}>Albums</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'Search' && styles.activeTab]}
        onPress={() => handleTabPress('Search')}
      >
        <Icon 
        name='search'
        type='material'
        />
        <Text style={[styles.tabText, activeTab === 'Search' && styles.textOnActiveTab]}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  textOnActiveTab: {
    color: '#508ef2',
  }
});

export default BottomNavBar;