
import Accordion from "../Accordion/Accordion";
import { LinkButton,ButtonMargin } from '../Button/buttonStyles';

export function MultiStepForm(){
    const accordionItems =[{
            title:'Step 1: Your details'},{
            title:'Step 2: More comments'},{
            title:'Step 3: Final comments'
        }
    ];
 
    return(
       <>
       <ButtonMargin><LinkButton to='/userlist'>Get All Users</LinkButton></ButtonMargin>
        
        <Accordion items={accordionItems} />
        </>  
    )
}

