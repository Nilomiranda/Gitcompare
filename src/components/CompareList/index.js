import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.css';

import {
  Container, Card, DeleteButton, UpdateButton,
} from './styles';

const CompareList = ({
  repositories, update, erase, loading,
}) => (
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
        <UpdateButton type="button" onClick={() => update(repository)}>
          {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Update'}
        </UpdateButton>
        <DeleteButton type="button" onClick={() => erase(repository)}>
          Delete
        </DeleteButton>
      </Card>
    ))}
  </Container>
);

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
