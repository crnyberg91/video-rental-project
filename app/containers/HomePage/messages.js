/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Some Guy's Made Up Video Store!",
  },
  subtext: {
    id: `%{scope}.subtext`,
    defaultMessage: "Weekly Rentals from classics to the latest movies!",
  },
  address: {
    id: `%{scope}.address`,
    defaultMessage: "1234 Fake Circ Springfield, Colobraska",
  },
  newReleases: {
    id: `%{scope}.newRelease`,
    defaultMessage: "Movie Cards sorted by rows, on hover to provide synopsis",
  }
});
