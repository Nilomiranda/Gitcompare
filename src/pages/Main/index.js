import React, { Fragment } from 'react';

// styles
import GlobalStyle from '../../styles/global';

// styled components
import { Container, Form } from './styles';

import logo from '../../assets/gitcompare-logo.png';

const Main = () => (
  <Fragment>
    <GlobalStyle />
    <Container>
      <img src={logo} alt="Gitcompare logo" />
      <Form>
        <input type="text" placeholder="user/repository" />
        <button type="submit">OK</button>
      </Form>
    </Container>
  </Fragment>
);

export default Main;
