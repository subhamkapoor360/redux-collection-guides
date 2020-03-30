import React, { Component } from 'react';
import moment from 'moment';
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component {

  timeSince(date) {
        var a = moment(new Date().getTime());
        var b = moment(date);

        var years = a.diff(b, 'year');
        b.add(years, 'years');

        var months = a.diff(b, 'months');
        b.add(months, 'months');

        var days = a.diff(b, 'days');

        console.log(years + ' years ' + months + ' months ' + days + ' days');
        return `${years} years, ${months} months, and ${days} days`
        }

  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
        <img src={partyPopper} alt="party-popper" className="party-popper" />
      </div>
    )
  }
}

export default AgeStats;