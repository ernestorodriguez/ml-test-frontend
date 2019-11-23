const React = require('react');
const Header = require('../');
const { shallow } = require('enzyme');

describe('Header component', () => {
    test('must show header with and input and button for search', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper).toMatchSnapshot();
    });
});
