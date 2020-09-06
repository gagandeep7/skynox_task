// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Image } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const StreamIcon = ({ avatar }) => (
  <Image
    ml=".8rem"
    size="3.4rem"
    css={css`
      clip-path: circle(110px at center);
      border-radius: 40%;
      padding: 0.2rem;
    `}
    src={avatar}
    alt="avatar"
    border="solid .2rem #F8AC94"
  />
);

StreamIcon.propTypes = {
  avatar: PropTypes.string,
};

StreamIcon.defaultProps = {
  avatar: '',
};

export default StreamIcon;
