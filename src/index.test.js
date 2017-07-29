import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
describe('our first test', ()=> {
  it('should pass', ()=> {
    expect(true).to.equal(true);
  });
});

describe('index.html', ()=> {
  it('should say h1 that says User', (done)=> {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      const val = h1.innerHTML;
      expect(val).to.equal('User');
      done();
      window.close();
    });
  })
})
