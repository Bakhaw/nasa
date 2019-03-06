import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import key from '../../key';

import Loader from '../../components/Loader';
import NavigateButton from '../../components/NavigateButton';
import Shot from '../../components/Shot';
import Explanation from './Explanation';

class ShotOfTheDay extends Component {
  state = {
    isLoading: false,
    date: moment().format('YYYY-MM-DD'),
    shot: {}
  };

  componentDidMount() {
    this.getShot();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.getShot();
    }
  }

  toggleLoading = async isLoading => await this.setState({ isLoading });

  getShot = async () => {
    await this.toggleLoading(true);
    const apiUrl = `${key.API_URL}?api_key=${key.API_KEY}&date=${
      this.state.date
    }`;
    const request = await axios.get(apiUrl);
    const shot = request.data;
    await this.setState({ shot });
    await this.toggleLoading(false);
  };

  getPrevShot = () => {
    const newDate = moment(this.state.date)
      .subtract(1, 'day')
      .format('YYYY-MM-DD');
    this.setState({ date: newDate });
  };

  getNextShot = () => {
    const { date } = this.state;
    if (date === moment().format('YYYY-MM-DD')) return;

    const newDate = moment(date)
      .add(1, 'day')
      .format('YYYY-MM-DD');
    this.setState({ date: newDate });
  };

  render() {
    const { isLoading, shot } = this.state;

    if (isLoading) return <Loader />;

    const { explanation } = shot;
    return (
      <div className='ShotOfTheDay'>
        <div className='ShotOfTheDay__media'>
          <NavigateButton icon='left-arrow' onClick={this.getPrevShot} />
          <Shot {...shot} />
          <NavigateButton icon='right-arrow' onClick={this.getNextShot} />
        </div>
        <Explanation explanation={explanation} />
      </div>
    );
  }
}

export default ShotOfTheDay;
