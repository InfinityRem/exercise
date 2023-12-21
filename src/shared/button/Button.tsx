import React, {ReactNode} from 'react';
import style from './Button.module.scss'

type PropsType = { children: ReactNode }

export const Button = ({children}:PropsType) => {
  return (
      <div className={style.button}>
        {children}
      </div>
  );
};


