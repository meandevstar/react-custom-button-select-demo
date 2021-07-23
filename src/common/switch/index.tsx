import { FC, ReactElement, useState } from 'react';

import { ISwitchProps } from './interfaces/switch-props.interface';
import { SwitchActiveLabel, SwitchCircle, SwitchContainer, SwitchInactiveLabel, SwitchStyled } from './styled';

const Switch: FC<ISwitchProps> = ({ activeLabel, inactiveLabel }): ReactElement => {
  const [checked, setChecked] = useState<boolean>(true);
  return (
    <SwitchContainer>
      <SwitchStyled checked={checked} onClick={(): void => setChecked(!checked)}>
        <SwitchCircle>
          {checked && <img src="/images/checked.svg" alt="" />}
          {!checked && <span>&times;</span>}
        </SwitchCircle>
      </SwitchStyled>
      {checked && <SwitchActiveLabel>{activeLabel}</SwitchActiveLabel>}
      {!checked && <SwitchInactiveLabel>{inactiveLabel}</SwitchInactiveLabel>}
    </SwitchContainer>
  );
};

export default Switch;
