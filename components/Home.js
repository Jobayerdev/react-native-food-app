import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import categoriesData from '../assets/data/categories';
import popular from '../assets/data/popular';

const Home = () => {
  const renderCategoriesItem = ({item}) => {
    console.log(item);

    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor:
              item.selected == true ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View style={[styles.categorySelectWrapper]}>
          <Feather
            style={[
              styles.categoriesSelectIcon,
              {
                backgroundColor: item.id == 1 ? colors.white : colors.secondary,
                color: item.id == 1 ? colors.textDark : colors.white,
              },
            ]}
            name="chevron-right"
            size={12}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>
      {/* Title */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.txtSubTitle}>Food</Text>
        <Text style={styles.txtHero}>Delivery</Text>
      </View>
      {/* Search */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
      {/* Categories */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoriesItem}
            horizontal={true}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      {/* Popular */}
      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        {popular.map((item) => (
          <View style={popularCardWrapper}>
            <Text>hello</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  txtSubTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: colors.textDark,
  },
  txtHero: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    marginTop: 5,
    color: colors.textDark,
  },
  searchWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 30,
  },

  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesSelectIcon: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginBottom: 20,
    height: 26,
    width: 26,
    borderRadius: 26,
    alignItems: 'center',
    lineHeight: 26,
    textAlign: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
