import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Card, DeleteButton } from './styles';

class CompareList extends Component {
  // handleDelete = repository => {
  //   const repositoriesList = JSON.parse(localStorage.getItem('repositories'));

  //   const repoPosition = repositoriesList.findIndex(repo => {
  //     return repo.id === repository.id;
  //   })

  //   repositoriesList.splice(repoPosition, 1);

  //   localStorage.setItem('repositories', JSON.stringify(repositoriesList));
  // };

  render() {
    const { repositories } = this.props;
    return (
      <Container>
        {repositories.map(repository => (
          <Card key={repository.id}>
            <header>
              <img src={repository.owner.avatar_url} alt={repository.owner.login} />
              <strong>{repository.name}</strong>
              <small>{repository.owner.login}</small>
            </header>
            <ul>
              <li>
                {repository.stargazers_count}
                <small>stars</small>
              </li>
              <li>
                {repository.forks_count}
                <small>forks</small>
              </li>
              <li>
                {repository.open_issues_count}
                <small>open issues</small>
              </li>
              <li>
                {repository.lastCommit}
                <small>last commit</small>
              </li>
            </ul>
            <DeleteButton type="button" onClick={() => this.props.delete(repository)} data={repository}>
              Delete
            </DeleteButton>
          </Card>
        ))}
      </Container>
    );
  }
}

// props validations
CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default CompareList;
