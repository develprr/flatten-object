import {assert, describe, it} from 'mocha';
import {makeObjectToFlat} from './flatten-object';

describe('makeObjectFlat', () => {

  it('should convert deeply nested object to flat object', () => {
    const deepObject = {
      user: {
        username: 'jondoe',
        kids: ['tim', 'kim', 'jim'],
        address: {
          streetAddress: 'Somestreet 1'
        }
      }
    }
    const flatObject = makeObjectToFlat(deepObject);
    flatObject['user.kids.1'].should.equal('kim');
    flatObject['user.kids.2'].should.equal('jim');
    flatObject['user.address.streetAddress'].should.equal('Somestreet 1');
  });
});
