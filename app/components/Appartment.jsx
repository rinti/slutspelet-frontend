import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Appartment extends Component {
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
              Gissa slutpriset: <input type="text" /> 
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

export default connect(mapStateToProps)(Appartment);
