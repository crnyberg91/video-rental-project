/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Container } from 'react-bootstrap';
import './homepage-style.css';
import ControlledCarousel from '../../components/Carousel/Carousel';

export default function HomePage() {
  return (
    <Container className='red'>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div>
        <FormattedMessage {...messages.subtext} />
      </div>
      <div>
        <FormattedMessage {...messages.address} />
      </div>
      <div className="new-release-container">
        <FormattedMessage {...messages.newReleases} />
      </div>
      <ControlledCarousel />
    </Container>
  );
}
