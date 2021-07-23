import { FC, ReactElement } from 'react';

import { IFooterProps } from './interfaces/footer.interface';
import { FooterStyled, ResetButton, DoneButton } from './styled';

const Footer: FC<IFooterProps> = ({ onReset }): ReactElement => {
  return (
    <FooterStyled>
      <ResetButton onClick={onReset}>Reset</ResetButton>
      <DoneButton>Done</DoneButton>
    </FooterStyled>
  );
};

export default Footer;
