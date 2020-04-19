import React, { useState, useCallback } from 'react';
import { Inline, TextField, Button, Stack, Text } from '@fxtrot/edge';

import styles from './styles.module.css';

const inputRefs = [
  React.createRef<HTMLInputElement>(),
  React.createRef<HTMLInputElement>(),
  React.createRef<HTMLInputElement>(),
  React.createRef<HTMLInputElement>()
];

const onChange = () => {};

const Code: React.FC = () => {
  const [pin, setPin] = useState(['0', '0', '0', '0']);

  const onKeyDown = useCallback(
    (ev: React.KeyboardEvent<HTMLFormElement>) => {
      const { keyCode } = ev;
      const { name } = ev.target as HTMLInputElement;

      if (!name) {
        return;
      }

      const i = Number(name);

      if (keyCode === 8) {
        // backspace
        setPin((pin) => [...pin.slice(0, i), '', ...pin.slice(i + 1)]);
        return;
      } else if (keyCode === 13) {
        // submit
        return;
      } else if (keyCode === 9) {
        // tab
        return;
      }

      const key = String.fromCharCode(ev.which);

      if (Number.isInteger(Number(key))) {
        setPin((pin) => [...pin.slice(0, i), key, ...pin.slice(i + 1)]);
      } else {
        return;
      }

      if (inputRefs[i + 1]) {
        inputRefs[i + 1].current?.focus();
      }
    },
    [setPin, inputRefs]
  );

  const onFocus = useCallback(
    (ev: React.FocusEvent<HTMLFormElement>) => {
      const { name } = ev.target;

      if (!name) {
        return;
      }

      const i = Number(name);

      setTimeout(() => {
        inputRefs[i].current?.select();
      }, 0);
    },
    [inputRefs]
  );

  const onPaste = useCallback(
    (ev: React.ClipboardEvent<HTMLFormElement>) => {
      const text = ev.clipboardData.getData('text');
      if (text.length) {
        setPin(text.split('').slice(0, 4));
      }
    },
    [setPin]
  );

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        console.log(pin.join(''));
      }}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      onFocus={onFocus}
    >
      <Stack align="center">
        <Text>Confirm the sign up with the PIN code we sent you:</Text>
        <Inline space="m" nowrap>
          {pin.map((s, i) => {
            return (
              <TextField
                size="l"
                name={`${i}`}
                key={i}
                inputRef={inputRefs[i]}
                value={s}
                onChange={onChange}
                className={styles.pinInput}
              />
            );
          })}
        </Inline>
        <Button type="submit" size="l" tone="brand">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Code;
