import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import { Segment, Grid, Divider } from 'semantic-ui-react';
import './RangePicker.css';
import Rheostat from 'rheostat';
import styled from 'styled-components'
// https://github.com/airbnb/rheostat

class RangePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  render() {
    let updateValue = (value) => {
      this.setState({value:value.values})
    }
    let rheostatHandleStyle = {
      position: 'absolute',
      left: this.state.value + '%',
    }

    const RheostatTooltip = styled.div`
      left: ${this.state.value}%;
      position: absolute;
      background-color: #01a8fe;
      width: 24px;
      margin-left: -5.5px;
      height: 16.1px;
      border-radius: 3px;
      top: -29px;        
      font-size: 10px;
      font-weight: 600;
      text-align: center;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    `

    // const scale = [0, ... , 100]
    // https://developer.mozilla.org/en-US/docs/Web/Events/dragstart
    return (
      <MainContainer>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <p>Default Range picker</p>
                <div className="range-picker">
                  <RheostatTooltip>
                    {this.state.value}
                  </RheostatTooltip>
                  <div className="tooltip start">0</div>
                  <div className="tooltip end">100</div>
                  <Rheostat
                    style={rheostatHandleStyle}
                    min={0}
                    max={100}
                    values={[this.state.value]}
                    onValuesUpdated={updateValue}
                  />
                </div>
                <Divider hidden />
                <p>Range picker with scale</p>

              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>

              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    );
  }
}

export default RangePicker;
