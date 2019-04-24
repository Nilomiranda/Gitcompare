import React from 'react';

import { Container, Card } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Card>
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
            {repository.pushed_at}
            <small>last commit</small>
          </li>
        </ul>
      </Card>
    ))}
    {/* <Card>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="User avatar" />
        <strong>react</strong>
        <small>facebook</small>
      </header>
      <ul>
        <li>
          95,019
          <small>users</small>
        </li>
        <li>
          17,891
          <small>forks</small>
        </li>
        <li>
          232
          <small>contributors</small>
        </li>
        <li>
          167
          <small>open issues</small>
        </li>
        <li>
          3 days ago
          <small>last commit</small>
        </li>
      </ul>
    </Card> */}
  </Container>
);

export default CompareList;
