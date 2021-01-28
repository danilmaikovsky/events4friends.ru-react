import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './ButtonAction.css';

const ButtonActionType = {
  default: 'default',
  service: 'service',
  events: 'events',
};

export const ButtonAction = ({
  type = ButtonActionType.default,
  onClick = () => {},
  active = false,
  label = '',
  children = '',
}) => (
  <button
    type="button"
    className={cn('button-action', `button-action--${type}`, {
      active,
    })}
    onClick={onClick}
  >
    <span className={cn('button-action__circle', { active })} />
    <span className="button-action__label">{label || children}</span>
  </button>
);

ButtonAction.propTypes = {
  type: PropTypes.oneOf(Object.keys(ButtonActionType)),
  onClick: PropTypes.func,
  active: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.string,
};
