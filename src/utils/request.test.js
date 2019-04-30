import axios from 'axios';
import * as Request from './request';

const defaultOptions = {
    method: 'get',
    responseType: 'json',
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
}

describe('Request utility function', () => {
    it('Should call axios with default options', () => {
        const fakeAxios = jest
            .spyOn(axios, 'request');

        Request.request('', {})
        .then(() => expect(fakeAxios).toHaveBeenCalledWith(defaultOptions));
    });

    it('Should call axios with specific options', () => {
        const fakeAxios = jest
            .spyOn(axios, 'request');

        Request.request('www.bbc.co.uk', {})
        .then(() => expect(fakeAxios).toHaveBeenCalledWith({
            url: 'www.bbc.co.uk',
            ...defaultOptions
        }));
    });

})