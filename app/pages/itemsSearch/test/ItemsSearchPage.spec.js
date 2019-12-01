const React = require('react');
const Page = require('../');
const { mount } = require('enzyme');
const reactRouter = require('react-router-dom');
const { act } = require('react-dom/test-utils');
const service = require('../../../../services/api');
const { JSDOM } = require('jsdom');

jest.mock('react-router');

const mockResponse = {
    items: [{
        'id': 'MLA823005561',
        'title': 'Apple iPhone 6s 32 Gb Gris Espacial',
        'price': {
            'currency': '$',
            'amount': '30990',
            'decimals': '20'
        },
        'picture': 'http://mla-s2-p.mlstatic.com/898290-MLA31003118647_062019-I.jpg',
        'condition': 'new',
        'free_shipping': true
    }, ],
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
        reactRouter.useLocation.mockImplementation(() => ({ search: () => 'iphone 8' }));

        let component;

        act(() => {
            component = mount(<Page pageData={mockResponse} />);
        });
        component.update();
        expect(component).toMatchSnapshot();
    });

    test('must render page with params from ajax call', async () => {
        jest.spyOn(service, 'search');
        reactRouter.useParams.mockImplementation(() => ({ search: () => 'iphone 8' }));

        const mockPromise = jest.fn(() => new Promise((resolve) => resolve({
            items: [{
                'id': 'MLA823005563',
                'title': 'Apple iPhone 7s 32 Gb Gris Espacial',
                'price': {
                    'currency': '$',
                    'amount': '40990',
                    'decimals': '70'
                },
                'picture': 'http://mla-s2-p.mlstatic.com/898290-MLA31003118647_062019-I.jpg',
                'condition': 'new',
                'free_shipping': true
            },
            {
                'id': 'MLA689528238',
                'title': 'Funda Silicone Case 5s Se 6 6s 7 Plus iPhone 8 Plus Original',
                'price': {
                    'currency': '$',
                    'amount': '699',
                    'decimals': '90'
                },
                'picture': 'http://mla-s1-p.mlstatic.com/679417-MLA31019694444_062019-I.jpg',
                'condition': 'new',
                'free_shipping': false
            }],
        })));

        service.search.mockImplementation(() => mockPromise());
        let component;

        await act( async () => {
            component = mount(<Page />);
            await mockPromise;
        });
        component.update();
        expect(component).toMatchSnapshot();
    });

    test('must handler error', async () => {
        jest.spyOn(service, 'search');
        reactRouter.useParams.mockImplementation(() => ({ id: 'MLA12345' }));

        const mockPromise = jest.fn(() => new Promise((resolve, reject) => reject('error on request')));

        service.search.mockImplementation(() => mockPromise());
        let component;

        await act( async () => {
            component = mount(<Page />);
            await mockPromise;
        });
        component.update();
        expect(component).toMatchSnapshot();
    });
});
