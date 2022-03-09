import React,{ useState } from 'react';
import { AccordionData } from './typesAccordion';
import AccordionItem from '../AccordionItem/AccordionItem';
import FormContextProvider from '../Form/formContext';
import { AccordionStyle } from './accordionStyle';

function Accordion({ items }: { items: Array<AccordionData> }) {
    const [currentIdx, setCurrentIdx] = useState(0);

  const btnOnClick = (idx: number) => {
    if(idx !== 3)
         setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

    return(
  <FormContextProvider>
     <AccordionStyle>
    {items.map((item, idx) => (
      <AccordionItem
      key={idx}
      ActiveTab={idx}
      data={item}
     isOpen={idx === currentIdx}
      btnOnClick={() =>btnOnClick && btnOnClick(idx)}
      goToNextStep={() =>btnOnClick && btnOnClick(idx+1)}
      
    />
    ))}
  </AccordionStyle>
  </FormContextProvider>
 
    );
}

export default Accordion;