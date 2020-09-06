import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import TextStyle from '../../../styles/TextStyle';
import COLOR from '../../../constants/color';

const categoryName = ['Rice', 'Noodle', 'Vegetable', 'Fruit', 'Cafe'];
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
]

const Category = () => {
  return (
    <View
      style={{
        backgroundColor: COLOR.neutral5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: 16,
        marginLeft: 16,
        height: 136,
        width: Dimensions.get('window').width
      }}
    >
      <Text style={
        [TextStyle.headline1,{ marginLeft: 12, marginBottom: 8, marginTop: 12 }]
      }
      >
        Gợi ý
      </Text>

      <View style={{ flexDirection: 'row' }}>
        {
          categories.map(category => {
            return (
              <View
                key={category.id}
                style={{
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  width: 64,
                  height: 64,
                  marginLeft: 12
                }}
              >
                <View
                  style={{
                    backgroundColor: '#fff',
                    padding: 12,
                    borderRadius: 10
                  }}
                >
                  <Image
                    source={category.url}
                    width={38}
                    height={40}
                  />
                </View>
                <Text
                  style={{
                    paddingTop: 8
                  }}
                >
                  {category.name}
                </Text>
              </View>
            );
          })
        }
      </View>
      
    </View>
  );
};

export default Category;