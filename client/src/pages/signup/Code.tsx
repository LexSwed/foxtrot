import React, { useState } from 'react';
import { Inline, TextField } from '@fxtrot/edge';

import styles from './styles.module.css';

const inputRefs = [
  React.createRef<HTMLInputElement>(),
  React.createRef<HTMLInputElement>(),
  React.createRef<HTMLInputElement>(),
  React.createRef<HTMLInputElement>()
];

const Code: React.FC = () => {
  const [pin, setPin] = useState(['', '', '', '']);

  return (
    <form
      onPaste={(ev) => {
        const text = ev.clipboardData.getData('text');
        if (text.length) {
          setPin(text.split('').slice(0, 4));
        }
      }}
    >
      <Inline nowrap>
        {pin.map((s, i) => {
          return (
            <TextField
              size="l"
              key={i}
              inputRef={inputRefs[i]}
              value={s}
              onFocus={() => {
                inputRefs[i].current?.select();
              }}
              onKeyDown={(ev) => {
                const { keyCode } = ev;

                if (keyCode === 8) {
                  // backspace
                  pin[i] = '';
                  setPin([...pin]);
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
                  pin[i] = key;
                  setPin([...pin]);
                } else {
                  return;
                }

                if (inputRefs[i + 1]) {
                  inputRefs[i + 1].current?.focus();
                }
              }}
              className={styles.pinInput}
            />
          );
        })}
      </Inline>
    </form>
  );
};

export default Code;
