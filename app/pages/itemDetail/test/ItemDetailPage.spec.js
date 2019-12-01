const React = require('react');
const Page = require('../');
const { mount } = require('enzyme');
const reactRouter = require('react-router-dom');
const { act } = require('react-dom/test-utils');
const service = require('../../../../services/api');
const { JSDOM } = require('jsdom');

jest.mock('react-router');

const mockResponse = {
    item: {
        description: 'this is a description',
    }
};

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.document = dom.window.document;
global.window = dom.window;


describe('Item Detail Page', () => {
    afterAll(() => {
        reactRouter.mockRestore();
    });

    test('must render page with params from server', () => {
        jest.spyOn(service, 'getItem');
        reactRouter.useParams.mockImplementation(() => ({ id: 'MLA12345' }));

        let component;

        act(() => {
            component = mount(<Page pageData={mockResponse} />);
        });
        component.update();
        expect(component).toMatchSnapshot();
    });

    test('must render page with params from ajax call', async () => {
        jest.spyOn(service, 'getItem');
        reactRouter.useParams.mockImplementation(() => ({ id: 'MLA12345' }));

        const mockPromise = jest.fn(() => new Promise((resolve) => resolve({
            item: {
                description: 'this is an ajax description'
            }
        })));

        service.getItem.mockImplementation(() => mockPromise());
        let component;

        await act( async () => {
            component = mount(<Page />);
            await mockPromise;
        });
        component.update();
        expect(component).toMatchSnapshot();
    });

    test('must handler error', async () => {
        jest.spyOn(service, 'getItem');
        reactRouter.useParams.mockImplementation(() => ({ id: 'MLA12345' }));

        const mockPromise = jest.fn(() => new Promise((resolve, reject) => reject('error on request')));

        service.getItem.mockImplementation(() => mockPromise());
        let component;

        await act( async () => {
            component = mount(<Page />);
            await mockPromise;
        });
        component.update();
        expect(component).toMatchSnapshot();
    });
});
