import styled from "styled-components";
import { COLORS } from '../../variables';

export const ListContainer =styled.div`
        margin: 0 auto;
        padding: 0 1.6rem;
        width: 100%;
`;
export const ListHeader = styled.div`
background: linear-gradient(to bottom, ${COLORS.yellow} 13%,${COLORS.yellowDark} 100%);
    border: 1px solid #e5e5e5;
    border-radius:${COLORS.radius};
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
`;
export const UserRow = styled.div`
align-items:center;
    background:#fff;
    border: 1px solid #e5e5e5;
    border-top: none;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 20px;
    text-decoration: none;
    transition: background .3s ease;
    &:hover {
        background: ${COLORS.greyLight};
      }
    @media (min-width: 960px) {
      
        flex-direction: row;
        padding: 5px 20px;
	}
`;
export const ListEle = styled.div`
    width: 210px;
    text-align:center;
    word-break: break-all;
`;