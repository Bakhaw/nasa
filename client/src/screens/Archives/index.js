import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import key from '../../key';

import Loader from '../../components/Loader';
import ShotImage from '../../components/ShotImage';

class Archives extends Component {
  state = {
    isLoading: false,
    date: moment()
      .subtract(1, 'day')
      .format('YYYY-MM-DD'),
    shots: []
  };

  componentDidMount() {
    this.getShots();
  }

  toggleLoading = isLoading => this.setState({ isLoading });

  getShots = async () => {
    await this.toggleLoading(true);
    do {
      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${
        key.API_KEY
      }&date=${this.state.date}`;
      const request = await axios.get(apiUrl);
      const shot = request.data;
      this.setState({
        shots: [...this.state.shots, shot],
        date: moment(this.state.date)
          .subtract(1, 'day')
          .format('YYYY-MM-DD')
      });
    } while (this.state.shots.length < 12); // 3 shots per row
    await this.toggleLoading(false);
  };

  render() {
    const { isLoading, shots } = this.state;

    if (isLoading) return <Loader />;

    return (
      <div className='Archives'>
        <h1>Archives</h1>
        <ul>
          {shots.map(({ hdurl, media_type, url }, index) => (
            <li key={index}>
              {media_type === 'image' && (
                <ShotImage height={400} width={400} hdurl={hdurl} />
              )}
              {media_type === 'video' && (
                <iframe height={400} width={400} src={url} />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Archives;
