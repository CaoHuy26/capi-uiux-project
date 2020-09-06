import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TextStyle from '../../../styles/TextStyle';
import COLOR from '../../../constants/color';

const categories = [
  {
    id: '1',
    url: require('../../../assets/img/category/Rice.png'),
    name: 'Cơm'
  },
  {
    id: '2',
    url: require('../../../assets/img/category/Noodle.png'),
    name: 'Phở'
  },
  {
    id: '3',
    url: require('../../../assets/img/category/Vegetable.png'),
    name: 'Rau củ'
  },
  {
    id: '4',
    url: require('../../../assets/img/category/Fruit.png'),
    name: 'Trái cây'
  },
  {
    id: '5',
    url: require('../../../assets/img/category/Cafe.png'),
    name: 'Cà phê'
  }
];

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.categoryImage}>
        <Image
          source={category.url}
          width={38}
          height={40}
        />
      </View>
      <Text style={styles.categoryName}>
        {category.name}
      </Text>
    </View>
  );
};

const Category = () => {
  return (
    <View style={styles.suggestCategoryContainer}>
      <Text style={[TextStyle.headline1, styles.suggestText]}>
        Gợi ý
      </Text>

      <View style={{ flexDirection: 'row' }}>
        {
          categories.map(category => {
            return (
              <CategoryItem
                key={category.id}
                category={category}
              />
            );
          })
        }
      </View>
      
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  suggestCategoryContainer: {
    backgroundColor: COLOR.neutral5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 16,
    marginLeft: 16,
    height: 136
  },
  suggestText: {
    marginLeft: 12,
    marginBottom: 8,
    marginTop: 12
  },
  categoryItem: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 64,
    height: 64,
    marginLeft: 12
  },
  categoryImage: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10
  },
  categoryName: {
    paddingTop: 8
  }
})