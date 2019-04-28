import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import moment from 'moment';
import 'font-awesome/css/font-awesome.css';

// components
import CompareList from '../../components/CompareList/index';

// global styles
import GlobalStyle from '../../styles/global';

// styled components
import { Container, Form } from './styles';

import logo from '../../assets/gitcompare-logo.png';

export default class Main extends Component {
  constructor(props) {
    super(props);

    // this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      submitError: false,
      repositoryInput: '',
      inputPlaceholder: 'user/repository',
      repositories: [],
      loading: false,
    };
  }


  handleInputChange = e => {
    this.setState({
      repositoryInput: e.target.value,
    });
  };

  handleUserSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    // searching for existing repos in local storage (array)
    const existingRepos = await JSON.parse(localStorage.getItem('repositories'));

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      if (existingRepos) {
        const sameRepo = existingRepos.filter(repo => repo.id === repository.id);

        if (sameRepo.length > 0) {
          return;
        } else {
          repository.lastCommit = moment(repository.pushed_at).fromNow();

          this.setState({
            repositories: [...this.state.repositories, repository],
            repositoryInput: '',
            submitError: false,
          });

          //saving repositories to localstorage
          const saveRepo = JSON.stringify(this.state.repositories);

          await localStorage.setItem('repositories', saveRepo);
        }
      } else {
        repository.lastCommit = moment(repository.pushed_at).fromNow();

        this.setState({
          repositories: [...this.state.repositories, repository],
          repositoryInput: '',
          submitError: false,
        });

        //saving repositories to localstorage
        const saveRepo = JSON.stringify(this.state.repositories);

        localStorage.setItem('repositories', saveRepo);
      }
    } catch (err) {
      console.log(err);
      this.setState({
        submitError: true,
        repositoryInput: '',
        inputPlaceholder: 'Repository not found 😢😢😢',
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDelete = async (repository) => {
    const repositoriesList = await JSON.parse(localStorage.getItem('repositories'));

    const repoPosition = repositoriesList.findIndex(repo => {
      return repo.id === repository.id;
    })

    repositoriesList.splice(repoPosition, 1); // removing repository

    // updating local storage
    await localStorage.setItem('repositories', JSON.stringify(repositoriesList));

    // updating components state with new repositories list
    this.setState({ repositories: repositoriesList });
  };

  async componentDidMount() {
    /**
     * let's check if the user has any repository saved in his local storage
     * if so, we first render this repositories
     */

    const existingRepos = await JSON.parse(localStorage.getItem('repositories'));

    if (!existingRepos) return; // exist if no repository is found

    this.setState({
      repositories: existingRepos,
    });
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <img src={logo} alt="Gitcompare logo" />
          <Form error={this.state.submitError} onSubmit={e => this.handleUserSubmit(e)}>
            <input
              type="text"
              placeholder={this.state.inputPlaceholder}
              onChange={e => this.handleInputChange(e)}
              value={this.state.repositoryInput}
            />
            <button type="submit">
              {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
            </button>
          </Form>
          <CompareList
            delete={(repository) => this.handleDelete(repository)}
            repositories={this.state.repositories}
          />
        </Container>
      </Fragment>
    );
  }
}
