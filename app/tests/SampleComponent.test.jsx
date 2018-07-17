import React from 'react';
import renderer from 'react-test-renderer';
import SampleComponent from '../components/SampleComponent';

describe('Sample component', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<SampleComponent text="test" />);
        expect(component).toMatchSnapshot();
    });
});
