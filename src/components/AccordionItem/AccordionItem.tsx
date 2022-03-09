import {useEffect, useState,useRef } from 'react';
import { AccordionData } from '../Accordion/typesAccordion';
import {UserDetail} from '../UserDetail/UserDetail';
import { UserDetail2 } from "../UserDetail2/UserDetails2";
import { UserDetail3 } from "../UserDetails3/UserDetails3";
import { getRefValue } from '../../lib/hooks';
import {ListItem,AccordionItemContainer,AccordionItemContent,AccordionItemTitle,Accordionbtn} from './accrodionItemStyles';

function AccordionItem({ data,ActiveTab,isOpen,btnOnClick,goToNextStep }: 
    { 
      data: AccordionData ;
      ActiveTab:number;
      isOpen: boolean;
      btnOnClick: () => void;
      goToNextStep:()=>void;
    }) 
      
    {
      // F0rm State and setForm State
      const contentRef = useRef<HTMLDivElement>(null);
      const [height, setHeight] = useState(0);
      
   const nextFormStep =()=>{
      goToNextStep();
   }
         
         useEffect(() => {
            if (isOpen) {
              const contentEl = getRefValue(contentRef);
              setHeight(contentEl.scrollHeight+20);
            } else {
              setHeight(0);
            }
          }, [isOpen]);
       
  const renderForm=()=>{
    
      if(ActiveTab === 0){
        return <UserDetail nextStep={nextFormStep} />
      }
      else if(ActiveTab === 1){
        return <UserDetail2  nextStep={nextFormStep}/>

      }else if(ActiveTab === 2){
        return <UserDetail3  nextStep={nextFormStep} />
      }
   }    
  return (
    <ListItem>
      <AccordionItemTitle>
        <Accordionbtn onClick={btnOnClick}>{data.title}</Accordionbtn>
      </AccordionItemTitle>
      
      <AccordionItemContainer style={{ height }}>
        <AccordionItemContent  ref={contentRef}>
        {renderForm()}
        </AccordionItemContent>
      </AccordionItemContainer>
     
    </ListItem>
  );
}
export default AccordionItem;