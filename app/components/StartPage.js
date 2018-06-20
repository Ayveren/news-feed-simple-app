import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Spinner,
  List,
  ListItem,
  Input,
  InputGroup,
  Icon,
  Title
} from 'native-base';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authActions';

class StartPage extends Component {
  constructor() {
    super();
    this.state = {
      password: 'asdmkakmsd',
      email: 'a;lskd;alksd',
      loading: false,
      error: false
    };
  }

  static navigationOptions = {
    title: 'Sign In',
  };

  async onSubmit() {
    const {email, password} = this.state;
    if (!email || !password) {
      return;
    }
    // await this.props.actions.signup('asa', 'asdads@gmail.com');

    try {
      await this.props.actions.signup(email, password);
      this.props.navigation.navigate('FeedPage');
    }
    catch (error) {
      this.setState({error: 'err', loading: false});
    }
  }

  onChangeText(newState) {
    this.setState({...newState, authStatus: ''});
  }

  render() {
    if (this.props.loading) {
      return (<Spinner color='blue'/>)
    }
    if (this.props.error) {
      return (
        <Container>
          <Header>
            <Title>{this.props.error}</Title>
          </Header>
        </Container>
      )
    }
    return (
      <Container>
        <Header>
          <Title>Awesome News App</Title>
        </Header>
        <Content>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name='ios-person'/>
                <Input placeholder='EMAIL'
                       onChangeText={email => this.onChangeText({email})}/>
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup>
                <Icon name='ios-unlock'/>
                <Input
                  placeholder='PASSWORD'
                  secureTextEntry={true}
                  onChangeText={password => this.onChangeText({password})}
                />
              </InputGroup>
            </ListItem>
          </List>
          <Button title='Sign Up' block onPress={() => this.onSubmit()}>
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}


StartPage.propTypes = {
  // authActions: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authActions: state.isSignedUp,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        authActions
      ), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);