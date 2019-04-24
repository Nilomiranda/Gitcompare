import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import moment from 'moment';

// components
import CompareList from '../../components/CompareList/index';

// global styles
import GlobalStyle from '../../styles/global';

// styled components
import { Container, Form } from './styles';

import logo from '../../assets/gitcompare-logo.png';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleInputChange = e => {
    this.setState({
      repositoryInput: e.target.value,
    });
  };

  handleUserSubmit = async e => {
    e.preventDefault();
    const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);
    repository.lastCommit = moment(repository.pushed_at).fromNow();
    this.setState({
      repositories: [...this.state.repositories, repository],
      repositoryInput: '',
    });
  };

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <img src={logo} alt="Gitcompare logo" />
          <Form onSubmit={e => this.handleUserSubmit(e)}>
            <input
              type="text"
              placeholder="user/repository"
              onChange={e => this.handleInputChange(e)}
              value={this.state.repositoryInput}
            />
            <button type="submit">OK</button>
          </Form>
          <CompareList repositories={this.state.repositories} />
        </Container>
      </Fragment>
    );
  }
}
