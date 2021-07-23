import { FC, ReactElement } from 'react';
import { IHeaderProps } from './interfaces/header-props.interface';
import { HeaderItem, HeaderItemClose, HeaderStyled } from './styled';

const Header: FC<IHeaderProps> = ({ tourLabel, removeTour }): ReactElement => {
  return (
    <HeaderStyled>
      <img src="/images/arrow.svg" alt="arrow" />
      {tourLabel && (
        <HeaderItem>
          <div>{tourLabel}</div>
          <HeaderItemClose onClick={removeTour}>&times;</HeaderItemClose>
        </HeaderItem>
      )}
    </HeaderStyled>
  );
};

export default Header;
