import styled from "styled-components";
import { COLORS } from "../../variables"; 
import { css } from "styled-components";

export const InputWrapper = styled.div`
    margin-right: 10px;
`;
export const InputLabel = styled.label`
display: block;
`;
export const InputGrid = styled.div`
    display: flex;
	justify-content: flex-start;
`;
const inputStyle =css`
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem 0.5rem;
    font-size:0.9rem;
    line-height: 1.2rem;
    background-clip: padding-box;
    border-radius: ${COLORS.radius};
    color:${COLORS.greyDark};
    border: 1px solid ${COLORS.borderColor};
    background-color: white;
    box-shadow: inset 0 0 10px ${COLORS.grey};
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const Input = styled.input`
   ${inputStyle}
`;
export const InputNumber =styled.input`
        ${inputStyle}
        width: ${props => props.width};
        ::-webkit-inner-spin-button{
            -webkit-appearance: none; 
            margin: 0; 
        }
        ::-webkit-outer-spin-button{
            -webkit-appearance: none; 
            margin: 0; 
        }  
        -moz-appearance: textfield; 
`;
export const InputSelect = styled.select`
    ${inputStyle}
    padding: 0.5rem 1rem 0.5rem!important;
}
`;
export const InputTextArea = styled.textarea`
        ${inputStyle}
        height: 200px;
	    width: 500px;
`;
export const InputGridFlex = styled.div`
display: flex;
justify-content: space-between;
`;
export const FormError = styled.p`
    font-size: 0.9rem;
    color: red;
    font-style: italic;
`;
export const DataGrid =styled.div`
    display: flex;
    justify-content: flex-start;
`;