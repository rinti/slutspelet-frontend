import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

export class Appartment extends Component {
  componentDidMount() {
    this.props.loadAppartment();
  }
  guess() {
    const { appartment } = this.props;
    const diff = Math.abs(window.guess.value - appartment.soldPrice)
    let score = (((appartment.soldPrice-diff)/appartment.soldPrice) * 100)
    score = Math.floor(Math.min(Math.max(score, 0), 100));
  }
  render() {
    const { appartment } = this.props;
    if(appartment) {
      return (
        <div id="app">
          <div>
            <div className="half">
              <ul>
                <li>
                  {appartment.location.namedAreas[0]}, {appartment.location.address.streetAddress}
                </li>
                <li>
                  {appartment.rooms} rok, {appartment.livingArea} kvm
                </li>
                <li>
                  Byggår: {appartment.constructionYear}
                </li>
                <li>
                  Utgångspris: {appartment.listPrice}kr
                </li>
                <li>
                  Såldes: {appartment.soldDate}
                </li>
                <li>
                  Hyra: {appartment.rent}kr
                </li>
                <li>
                  <a href={appartment.url}>Visa på booli.se</a>
                </li>
              </ul>
            </div>
            <div className="half">
              we should show a map here
            </div>
            <div className="clear-both">
              Gissa slutpriset: <input id="guess" type="text" /> <button onClick={this.guess.bind(this)}>gissa</button>
            </div>
          </div>
        </div>
      )
    }
    return (<div />) // loading indicator?
  }
}

function mapStateToProps(state) {
  return {
    appartment: state.appartment
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Appartment);
