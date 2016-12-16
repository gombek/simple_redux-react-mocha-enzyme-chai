/* eslint-disable no-undef */
import App from './App';
// import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('App root', () => {
    const props = {};

    it('Renders main component', () => {
        const element = shallow(
            <App {...props} />
        );

        expect(element.hasClass('App')).to.be.ok;
    });
});