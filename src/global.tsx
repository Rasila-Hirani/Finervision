import styled ,{createGlobalStyle} from 'styled-components';
import { COLORS } from './variables';
export const GlobalStyle =createGlobalStyle`
body:not(.user-is-tabbing) button:focus,
body:not(.user-is-tabbing) input:focus,
body:not(.user-is-tabbing) select:focus,
body:not(.user-is-tabbing) textarea:focus {
	outline: none;
}
*,
*:before,
*:after {
	box-sizing: inherit;
}

html {
	box-sizing: border-box;
}
body {
	margin: 0;
	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 2rem;
	background: ${COLORS.primary};
	@media (min-width: 767px) {
		font-size: 18px;
	}
}
    *{
        box-sizing: border-box;
       }
`
export const Container = styled.div`
	width: 100%;
	max-width: 540px;
	margin: 5rem auto;
	 padding: 0 1rem;
	
	@media (min-width: 960px) {
		max-width: 900px;
	}
`;