import styled,{css} from "styled-components";
import { COLORS } from '../../variables';
import { Link } from 'react-router-dom';

const buttonStyle = css`
	font-size: 0.9rem;
	letter-spacing: 0.125rem;
	box-sizing: border-box;
	display: flex;
	padding: 0.50rem 1.5rem 0.50rem;
	border: 0;
	outline: 0;
	border-radius:${COLORS.radius};
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	transition: all 0.2s ease-in-out;
	color: #fff;
	background: linear-gradient(to bottom, ${COLORS.blue} 31%, ${COLORS.blueLight} 100%);
	float: right;
`;
export const CustomButton = styled.button`
   ${buttonStyle}

`;
export const LinkButton = styled(Link)`
	align-items: center;
	background: linear-gradient(to bottom, ${COLORS.blue} 31%, ${COLORS.blueLight} 100%);
	color: #fff;
	border-radius:${COLORS.radius};
	font-size: 0.9rem;
	letter-spacing: 0.125rem;
	text-decoration:none;
	padding: 0.50rem 1.5rem 0.50rem;
	
`;
export const ButtonMargin = styled.div`
margin-bottom:5rem;
`;
