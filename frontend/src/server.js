import ReactOnRails from 'react-on-rails';
import Router from './containers/Router';
import Helmet from 'react-helmet'

global.Helmet = Helmet;

ReactOnRails.register({
  Router,
});
