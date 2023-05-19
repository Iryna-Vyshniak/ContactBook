import { Text } from './Advertising.styled';
import PropTypes from 'prop-types';

export const Advertising = ({ text }) => {
  return <Text>{text}</Text>;
};

Advertising.propTypes = {
  text: PropTypes.string.isRequired,
};
