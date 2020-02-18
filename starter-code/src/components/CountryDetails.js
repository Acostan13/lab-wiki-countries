import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import countries from '../countries.json'

class CountryDetails extends Component {

    findDetails = () => {
        console.log('country detail cca3:',this.props.match.params.hippopotamus, this.props.countries)
        let theCountry = this.props.countries.find(eachCountry => {
            return eachCountry.cca3 === this.props.match.params.hippopotamus
        })
        console.log(theCountry)
        return theCountry;
    }

    render() {
        let theCountry = this.findDetails()
        return (
            <div className="col-7">
            <h1>{theCountry.flag} {theCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{theCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{theCountry.area}
           <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  <ul>
                    {theCountry.borders.map(borderCountry => (
                        <li key={borderCountry}>
                            <Link to={`/country-detail/${borderCountry}`}>
                                {countries.find(country => country.cca3 === borderCountry).name.common}
                            </Link>
                        </li>
                    ))}
                </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default CountryDetails;