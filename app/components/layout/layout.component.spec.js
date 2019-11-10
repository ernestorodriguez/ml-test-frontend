const React = require('react');
const Layout = require('./index');
const Enzyme = require('enzyme');
const { shallow } = require('enzyme');

describe('Layout component', () => {
    test('should match snapshot', () => {
        const config = {
            title: 'Page Title'
        };

        const wrapper = shallow(<Layout {...config} />);

        expect(wrapper).toMatchSnapshot();
    });
});