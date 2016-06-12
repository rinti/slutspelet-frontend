import React from 'react';

const appartment = {
  booliId: 1412790,
  constructionYear: 1947,
  listPrice: 1995000,
  livingArea: 53,
  location: {
    address: {
      streetAddress: 'Ekensbergsvägen 118'
    },
    distance: {
      ocean: 4573
    },
    namedAreas: [
      'Gröndal'
    ],
    position: {
      isApproximate: true,
      latitude: 59.3152301,
      longitude: 17.9943852
    },
    region: {
      countyName: 'Stockholms län',
      municipalityName: 'Stockholm'
    }
  },
  objectType: 'Lägenhet',
  published: '2013-05-04 00:26:47',
  rent: 2958,
  rooms: 3,
  soldDate: '2013-05-21',
  soldPrice: 2005000,
  source: {
    id: 1566,
    name: 'Notar',
    type: 'Broker',
    url: 'http://www.notar.se/'
  },
  url: 'https://www.booli.se/annons/1412790'
}

export default () => (
  <div>
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
