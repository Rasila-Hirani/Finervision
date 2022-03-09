import styled  from "styled-components";
import { COLORS } from "../../variables";

export const ListItem =styled.li`
    padding:5px 5px 0px 5px;    
    &:last-child{
        padding-bottom: 5px;
    }
    not(:first-of-type) {
        border-top: 0;
      }
`;
export const AccordionItemContainer = styled.div`
    transition: height 0.2s ease-in-out;
    overflow: hidden;
    background: ${COLORS.greyLight};
    border-radius:${COLORS.radius};
`;
export const AccordionItemContent =styled.div`
padding: 15px 20px;
`;
export const AccordionItemTitle = styled.div`
    width: 100%;
    margin: 0;
    
`;
export const Accordionbtn = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    background: linear-gradient(to bottom, ${COLORS.yellow} 13%,${COLORS.yellowDark} 100%);
    color: #fff;
    text-shadow: 0.7px 0.5px black;
    border: 0;
    padding: 15px 20px;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    user-select: none;
    border-radius:${COLORS.radius};
`;