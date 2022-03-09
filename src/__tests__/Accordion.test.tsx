import Accordion from '../components/Accordion/Accordion';
import {fireEvent, render, screen, within } from '@testing-library/react';


describe('<Accordion />', () => {
    it('should render items', () => {
        const items =[{
            title:'Step 1: Your details'},{
            title:'Step 2: More comments'},{
            title:'Step 3: Final comments'
        }
    ];
    render(<Accordion items={items} />);
    items.forEach(({ title}) => {
        const titleEl = screen.queryByText(title);
        expect(titleEl).toBeInTheDocument();
      });
    });
    it('should close if already opened', () => {
        const items =[{
            title:'Step 1: Your details'},{
            title:'Step 2: More comments'},{
            title:'Step 3: Final comments'
        }
    ];
    
        render(<Accordion items={items} />);
    
        items.forEach(({ title }) => {
          const titleEl = screen.queryByText(title) as HTMLButtonElement;
    
          fireEvent.click(titleEl);
          fireEvent.click(titleEl);
    
          const currentListEl = titleEl.closest('li');
    
          expect(currentListEl).not.toContain('active');
        });
      });
    
});