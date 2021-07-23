import { FC, ReactElement } from 'react';

import Switch from '../../common/switch';
import { AttractionsStyled, AttractionsTitle } from './styled';

const Attractions: FC = (): ReactElement => {
  return (
    <AttractionsStyled>
      <AttractionsTitle>Attractions</AttractionsTitle>
      <Switch activeLabel="Accessible" inactiveLabel="Not Accessible" />
      <Switch activeLabel="Included in TopView Pass" inactiveLabel="Not included in TopView Pass" />
    </AttractionsStyled>
  );
};

export default Attractions;
