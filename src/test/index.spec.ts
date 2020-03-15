//const expect = require('chai').expect;
import {expect} from 'chai';
import 'mocha';

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});