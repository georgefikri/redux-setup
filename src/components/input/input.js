import React, { forwardRef } from 'react';
import { capitalizeFirstWord } from '../../helpers';
import './input.scss';
const input = forwardRef(
  (
    { placeholder, value, id, name, iconsBoolean, icons, classes, type, onChange, disabled },
    ref
  ) => {
    return (
      <div>
        <div className="input-field-container">
          {iconsBoolean && (
            <span className="input-icon-cont">
              <span className={icons} />
            </span>
          )}
          <input
            type={type}
            ref={ref}
            className={classes}
            id={id}
            // data-testid={id}
            placeholder={capitalizeFirstWord(placeholder)}
            value={value}
            name={name}
            // eslint-disable-next-line no-console
            onChange={(e) => onChange(e)}
            disabled={disabled}
            data-testid='input'

          />
        </div>
      </div>
    );
  }
);
export const Input = input;
