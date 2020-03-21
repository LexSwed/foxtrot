import React from 'react';

type Props = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

const Label = React.forwardRef<HTMLLabelElement, Props>(
  ({ children, ...props }) => {
    return (
      <label className="fx-label" {...props}>
        {children}
      </label>
    );
  }
);

Label.displayName = 'fx-label';

export default Label;
