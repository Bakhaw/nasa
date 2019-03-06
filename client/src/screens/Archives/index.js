import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import key from '../../key';

import Loader from '../../components/Loader';
import NavigateButton from '../../components/NavigateButton';
import Shot from '../../components/Shot';

class Archives extends Component {
  state = {
    isLoading: false,
    actualDate: moment().format('YYYY-MM-DD'),
    currentPage: 0,
    numberToFetch: 15,
    shots: []
  };

  componentDidMount() {
    this.getShots();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      window.scrollTo(0, 0);
    }
  }

  toggleLoading = isLoading => this.setState({ isLoading });

  getShots = async () => {
    await this.toggleLoading(true);

    const { API_KEY, API_URL } = key;

    do {
      const { actualDate } = this.state;
      const apiUrl = `${API_URL}?api_key=${API_KEY}&date=${actualDate}`;
      const request = await axios.get(apiUrl);
      const shot = request.data;

      await this.setState(prevState => ({
        actualDate: moment(prevState.actualDate)
          .subtract(1, 'd')
          .format('YYYY-MM-DD'),
        shots: [...prevState.shots, shot]
      }));
    } while (this.state.shots.length < this.state.numberToFetch);

    await this.toggleLoading(false);
  };

  prevPage = async () => {
    await this.toggleLoading(true);

    // Here we use the date of first shot to get next shots
    await this.setState(prevState => ({
      actualDate: moment(prevState.shots[0].date)
        .add(1, 'd')
        .format('YYYY-MM-DD'),
      currentPage: prevState.currentPage - 1,
      shots: []
    }));

    do {
      const { API_KEY, API_URL } = key;
      const { actualDate } = this.state;
      const apiUrl = `${API_URL}?api_key=${API_KEY}&date=${actualDate}`;
      const request = await axios.get(apiUrl);
      const shot = request.data;

      await this.setState(prevState => ({
        actualDate: moment(prevState.actualDate)
          .add(1, 'd')
          .format('YYYY-MM-DD'),
        shots: [shot, ...prevState.shots]
      }));
    } while (this.state.shots.length < this.state.numberToFetch);

    await this.toggleLoading(false);
  };

  nextPage = async () => {
    // Here we use the date of last shot to get next shots
    await this.setState(prevState => ({
      actualDate: moment(prevState.shots[prevState.shots.length - 1].date)
        .subtract(1, 'd')
        .format('YYYY-MM-DD'),
      currentPage: prevState.currentPage + 1,
      shots: []
    }));
    await this.getShots();
  };

  render() {
    const { currentPage, isLoading, shots } = this.state;

    if (isLoading) return <Loader />;

    return (
      <div className='Archives' id='archives_screen'>
        <h1>Archives</h1>
        <ul className='Archives__Shots'>
          {shots.map((shot, index) => (
            <li key={index}>
              <p style={{ color: 'white' }}>{shot.date}</p>
              <Shot {...shot} />
            </li>
          ))}
        </ul>
        {currentPage > 0 && (
          <NavigateButton icon='left-arrow' onClick={this.prevPage} />
        )}
        <NavigateButton icon='right-arrow' onClick={this.nextPage} />
      </div>
    );
  }
}

export default Archives;
