import HttpService from '../http/http-service';

class DataServiceClass {

  constructor(httpService) {
    Object.assign(this, { httpService });
  }

  signIn({ email, password }) {
    return this.httpService.post('/sign-in', { email, password }).then(({ data }) => data);
  }
}

export const DataService = new DataServiceClass(HttpService);


