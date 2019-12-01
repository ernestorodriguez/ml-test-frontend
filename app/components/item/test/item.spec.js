const React = require('react');
const Item = require('../');
const { shallow } = require('enzyme');
const reactRouter = require('react-router-dom');

jest.mock('react-router');

describe('Item component', () => {
    afterAll(() => {
        reactRouter.mockRestore();
    });

    test('must show header with and input and button for search and send query if button is press', () => {
        const preventDefault = jest.fn();
        const push = jest.fn();

        reactRouter.useHistory.mockImplementation(() => ({ push }));

        const wrapper = shallow(<Item id={'MLA123'} />);

        wrapper.find('[data-js="item"]').simulate('click', {
            preventDefault
        });
        expect(wrapper).toMatchSnapshot();
        expect(preventDefault.mock.calls.length).toBe(1);
        expect(reactRouter.useHistory.mock.calls.length).toBe(1);
        expect(push).toBeCalledWith('/items/MLA123');
    });
});
