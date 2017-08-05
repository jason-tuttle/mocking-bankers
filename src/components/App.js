import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';



//import components and containers


class App extends Component {
  render() {
    return (

        <div style={{fontFamily: 'serif'}}>
          <div className="col-md-6" style={{backgroundColor: "rgba(200, 200, 200, 0.8)", padding: '50px'}}>
            <h3>Like the Medicis, or the Rothschilds &mdash; only 21st century!</h3>
            <hr className= "my-4"/>
            <p style={{textAlign: 'justify'}}>The word bank was borrowed in Middle English from Middle French
              <em>banque</em>, from Old Italian <em>banca</em>, meaning "table",
              from Old High German <em>banc</em>, bank "bench, counter". Benches
              were used as makeshift desks or exchange counters during the
              Renaissance by Jewish Florentine bankers, who used to make their
              transactions atop desks covered by green tablecloths.</p>
            <p className= "lead">
              <Link className= "btn btn-primary btn-lg" to="/users" role="button">Check Users</Link>
              </p>
            </div>
        </div>


    );
  }
}

export default App;
