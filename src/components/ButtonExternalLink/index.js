import React from 'react';
import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './ButtonExternalLink.css';

const ButtonExternalLink = ({
  href,
  icon = '',
  alt = '',
  title = '',
  style,
  classList = [],
  className = '',
}) => {
  return (
    <a
      href={href}
      style={style}
      className={cn('link', className, [...classList])}
    >
      <img src={icon} alt={alt || 'le-icon'} className="link__image" />
      {title && <span className="link__text"> {title} </span>}
    </a>
  );
};

ButtonExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  style: stylePropType,
  classList: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default ButtonExternalLink;
