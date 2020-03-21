import React from 'react';
import { useUID } from 'react-uid';
import cx from 'classnames';

import Label from 'lib/Label';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type Props = {
  label?: string;
  placeholder?: string;
  value?: InputProps['value'];
  onChange?: InputProps['onChange'];
  disabled?: boolean;
  type?: InputProps['type'];
  name?: InputProps['name'];
  message?: string;
  size?: 'xs' | 's' | 'm' | 'l';
  inputProps?: InputProps & {
    ref?: React.MutableRefObject<HTMLInputElement>;
  };
};

const TextField = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      disabled,
      type,
      name,
      message,
      size,
      inputProps = {},
      children,
      ...props
    },
    ref
  ) => {
    const uid = useUID();
    const id = inputProps.id || `textfield-${uid}`;
    const labelId = `${id}-label`;
    const messageId = `${id}-message`;

    if (label && inputProps['aria-describedby'] !== undefined) {
      inputProps['aria-describedby'] = labelId;
    }

    if (message) {
      inputProps['aria-describedby'] = messageId;
    }

    return (
      <div
        className={cx('fx-textfield', { [`fx--textfield--${size}`]: true })}
        {...props}
        ref={ref}
      >
        {label && (
          <Label id={labelId} htmlFor={id}>
            {label}
          </Label>
        )}
        <div className={cx('fx-textfield-wrapper')}>
          <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={cx('fx-textfield-input')}
            id={id}
            name={name}
            {...inputProps}
          />
          {children}
        </div>
        {message && (
          <div className={cx('fx-textfield-message')} id={messageId}></div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'fx-textfield';
TextField.defaultProps = {
  type: 'text',
  size: 'm',
  inputProps: {}
};

export default TextField;
