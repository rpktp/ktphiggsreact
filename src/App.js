import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Container, Col, Row } from './components/Grid';
import { Button, GhostButton, DenseButton, SecondaryButton, SecondaryGhostButton, InverseButton, InverseGhostButton }  from './components/Button';
import Icon from './components/Icon';
import './App.css';

class App extends Component {
  render() {
    console.log('Current theme: ', this.props.theme);
    return (
      <Container>
        <Row>
          <Col>
            <Button>Normal Button</Button> 
            <Button><Icon icon="shoppingCart" /> Normal Button with Icon</Button><br /><br />
            <Button disabled>Disabled Button</Button> <Button disabled><Icon icon="shoppingCart" /> Disabled Button with Icon</Button><br /><br />
            <Button ghost>Ghost Button</Button> <br /><br />
            <GhostButton>Ghost Button</GhostButton> <GhostButton><Icon icon="shoppingCart" /> Ghost Button with Icon</GhostButton><br /><br />
            <DenseButton>Dense Button</DenseButton> <DenseButton><Icon icon="shoppingCart" /> Dense Button with Icon</DenseButton><br /><br />
            <SecondaryButton>Secondary Button</SecondaryButton> <SecondaryButton><Icon icon="shoppingCart" /> Secondary Button with Icon</SecondaryButton><br /><br />
            <SecondaryGhostButton>Secondary Ghost Button</SecondaryGhostButton> <SecondaryGhostButton><Icon icon="shoppingCart" /> Secondary Ghost Button with Icon</SecondaryGhostButton><br /><br />
            <div className="darkDiv">
              <InverseButton>Inverse Button</InverseButton> <InverseButton><Icon icon="shoppingCart" /> Inverse Button with Icon</InverseButton><br /><br />
              <InverseGhostButton>Inverse Ghost Button</InverseGhostButton>  <InverseGhostButton><Icon icon="shoppingCart" /> Inverse Button with Icon</InverseGhostButton>
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
