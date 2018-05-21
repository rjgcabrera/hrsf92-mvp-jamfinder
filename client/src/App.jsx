import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Header from './components/Header.jsx';
import EventList from './components/EventList.jsx';
import Footer from './components/Footer.jsx';
import SFevents from './sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // events: [],
      events: SFevents.events,
    };
  }

  componentDidMount() {

  }

  render() {
    return(
      <div id="app">
        <Header />
        <div id="main-div">
          <EventList events={this.state.events} />

        </div>
        <Footer />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
