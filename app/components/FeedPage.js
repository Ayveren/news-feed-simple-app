import React, {Component} from 'react';
import {Container, Content, Button, Text, Spinner} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as feedActions from '../actions/feedActions';
import Article from './Article';

class FeedPage extends Component {
  render() {
    if (this.props.loading || !this.props.articles) {
      return (<Spinner color='blue'/>)
    }
    return (
      <Container>
        <Content>
          {this.props.articles.map(article => {
            return <Article data={article} key={article.publishedAt}/>
          })}
          <Button title='Log Out' onPress={() => this.props.navigation.goBack()}>
            <Text>Log Out</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    articles: state.articles,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        feedActions
      ), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);