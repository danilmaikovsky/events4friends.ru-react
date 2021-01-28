import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import cn from 'classnames';
import './Button.css';

const Button = ({
  tag: Tag = 'button',
  style,
  onPress = () => {},
  icon = '',
  children,
  classList = [],
  className = '',
}) => {
  return (
    <Tag
      className={cn('welcomeview__button', className, [...classList])}
      onClick={onPress}
      style={style}
    >
      <div className="welcomeview__image__wrapper">
        <img src={icon} alt={children} className="welcomeview__image" />
      </div>
      {children && <div className="welcomeview__text">{children}</div>}
    </Tag>
  );
};

Button.propTypes = {
  tag: PropTypes.string,
  style: stylePropType,
  onPress: PropTypes.func,
  icon: PropTypes.string,
  children: PropTypes.string,
  classList: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Button;
