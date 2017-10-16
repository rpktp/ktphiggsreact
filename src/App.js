import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Container, Col, Row } from './components/Grid';
import { Button, ButtonGhost, ButtonDense, ButtonSecondary, ButtonSecondaryGhost, ButtonInverse, ButtonInverseGhost }  from './components/Button';
import Icon from './components/Icon';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Button>Normal Button</Button> 
            <Button><Icon icon="shoppingCart" /> Normal Button with Icon</Button><br /><br />
            <Button disabled>Disabled Button</Button> <br /><br />
            <ButtonGhost>Ghost Button</ButtonGhost><br /><br />
            <ButtonDense>Dense Button</ButtonDense> <br /><br />
            <ButtonSecondary>Secondary Button</ButtonSecondary> <br /><br />
            <ButtonSecondaryGhost>Secondary Ghost Button</ButtonSecondaryGhost>
            <div className="darkDiv">
              <ButtonInverse>Inverse Button</ButtonInverse><br />
              <ButtonInverseGhost>Inverse Ghost Button</ButtonInverseGhost> 
            </div>
            <Icon icon="shoppingCart" size="16"/>
            <Icon icon="accountCircle" size="24" />
            <Icon icon="addToCalendar" size="32" />
            <Icon icon="addedToCalendar" size="48" />
            <Icon icon="alarm" />
            <Icon icon="alarmOn" />
            <Icon icon="alarmOff" />
            <Icon icon="arrowBack" />
            <Icon icon="arrowDownward" size="48"/>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default withTheme(App)
