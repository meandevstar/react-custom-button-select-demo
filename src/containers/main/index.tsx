import { FC, ReactElement, useState } from 'react';

import { MainStyled } from './styled';
import Header from '../../components/header';
import ToursBlock from '../../components/tours-block';
import Attractions from '../../components/attractions';
import Footer from '../../components/footer';
import { IToursBlockItem } from '../../components/tours-block/interfaces/tours-block-props.interface';
import { busTours, cruiseTours, attractions } from './tours';

const Main: FC = (): ReactElement => {
  const [selectedBusTour, setSelectedBusTour] = useState<IToursBlockItem>({ id: '-1' });
  const [selectedCruiseTours, setSelectedCruiseTours] = useState<IToursBlockItem[]>([]);
  const [selectedAttractions, setSelectedAttractions] = useState<IToursBlockItem[]>([]);

  const onBusTourSelect = (item: IToursBlockItem): void => {
    if(selectedBusTour.id === item.id) {
      setSelectedBusTour({ id: '-1' });
    }
    else {
      setSelectedBusTour(item);
    }
  };

  const onCruiseItemSelect = (item: IToursBlockItem): void => {
    const selectedItem: IToursBlockItem | undefined = selectedCruiseTours.find(
      (blockItem: IToursBlockItem): boolean => blockItem.id === item.id
    );
    if(selectedItem) {
      setSelectedCruiseTours(
        selectedCruiseTours.filter((blockItem: IToursBlockItem): boolean => blockItem.id !== item.id)
      );
    }
    else {
      setSelectedCruiseTours([...selectedCruiseTours, item]);
    }
  };

  const onAttractionItemSelect = (item: IToursBlockItem): void => {
    const selectedItem: IToursBlockItem | undefined = selectedAttractions.find(
      (blockItem: IToursBlockItem): boolean => blockItem.id === item.id
    );
    if(selectedItem) {
      setSelectedAttractions(
        selectedAttractions.filter((blockItem: IToursBlockItem): boolean => blockItem.id !== item.id)
      );
    }
    else {
      setSelectedAttractions([...selectedAttractions, item]);
    }
  };

  const onReset = () => {
    setSelectedBusTour({ id: '-1' });
    setSelectedCruiseTours([]);
    setSelectedAttractions([]);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header
        tourLabel={selectedBusTour?.title || ''}
        removeTour={() => {setSelectedBusTour({ id: '-1' })}}
      />
      <MainStyled>
        <ToursBlock
          label="Bus Tours"
          items={busTours}
          selectedItems={[selectedBusTour]}
          onItemSelect={onBusTourSelect}
        />
        <ToursBlock
          label="Cruise Tours"
          items={cruiseTours}
          selectedItems={selectedCruiseTours}
          onItemSelect={onCruiseItemSelect}
        />
        <Attractions />
        <ToursBlock
          items={attractions}
          selectedItems={selectedAttractions}
          onItemSelect={onAttractionItemSelect}
        />
        <Footer onReset={onReset} />
      </MainStyled>
    </>
  );
};

export default Main;
