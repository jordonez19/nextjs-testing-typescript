/* import { render, screen } from '@testing-library/react';
import Homepage from '@/app/page';


describe('Homepage', () => {
    

    it('should render Home page', () => {
        render(<Homepage />);
        expect(screen.getByText('Templates')).toBeInTheDocument();

    });


    it('should render get started by', () => {
        render(<Homepage />);
        expect(screen.getByText('Get started by editing')).toBeInTheDocument();

    });

});
 */
import { render, screen } from '@testing-library/react';
import Homepage from '@/app/page';


describe('Homepage', () => {
    const setup  = () => render(<Homepage />);

    it('should render Home page', () => {
        setup();
        expect(screen.getByText('Templates')).toBeInTheDocument();
    });


    it('should render get started by', () => {
        setup();
        expect(screen.getByText('Get started by editing')).toBeInTheDocument();
    });

    it('should render Docs', () => {
        setup();
        expect(screen.getByText('Docs')).toBeInTheDocument();
    });

});
