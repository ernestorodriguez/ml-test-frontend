const request = require('supertest');
const App = require('../../../index');

describe.only('Acceptance test for Client App', () => {
    test('serve app when / path is called', (done) => {
        request(App)
            .get('/')
            .end((err, res) => {
                expect(err).toEqual(null);
                expect(res.status).toEqual(200);
                expect(res.text).toContain('HOME');
                done();
            });
    });

    test('serve app when /items path is called', (done) => {
        request(App)
            .get('/items')
            .end((err, res) => {
                expect(err).toEqual(null);
                expect(res.status).toEqual(200);
                expect(res.text).toContain('SEARCH');
                done();
            });
    });

    test('serve app when /items/MLA1234 path is called', (done) => {
        request(App)
            .get('/items/MLA1234')
            .end((err, res) => {
                expect(err).toEqual(null);
                expect(res.status).toEqual(200);
                expect(res.text).toContain('DESCRIPTION');
                done();
            });
    });
});