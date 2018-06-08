import React, {Component} from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Text} from 'native-base';
import {dimension} from '../styles';

export default class Article extends Component {
  render() {
    const {title, description, urlToImage} = this.props.data;

    return (
      <Card>

        <CardItem>
          <Text>
            {title}
          </Text>
        </CardItem>

        <CardItem cardBody>
          <Image
            style={{
              resizeMode: 'cover',
              width: dimension().width,
              height: 150
            }}
            source={{uri: urlToImage}}
          />
        </CardItem>

        <CardItem>
          <Text note>
            {description}
          </Text>
        </CardItem>

      </Card>
    )
  }
}