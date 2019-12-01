const React = require('react');
const Header = require('../');
const { shallow } = require('enzyme');
const reactRouter = require('react-router-dom');

jest.mock('react-router');

describe('Header component', () => {

    afterAll(() => {
        reactRouter.mockRestore();
    });

    test('must show header with and input and button for search and send query if button is press', () => {
        const preventDefault = jest.fn();
        const push = jest.fn();

        reactRouter.useHistory.mockImplementation(() => {
            return { push };
        });
        const wrapper = shallow(<Header />);
        wrapper.find('[data-js="search-input"]').simulate('change', {target: {value: 'iphone 8'}});
        wrapper.find('[data-js="search-submit"]').simulate('click', {
            preventDefault
        });
        expect(wrapper).toMatchSnapshot();
        expect(preventDefault.mock.calls.length).toBe(1);
        expect(reactRouter.useHistory.mock.calls.length).toBe(2);
        expect(push).toBeCalledWith('/items?q=iphone 8');
    });
});
