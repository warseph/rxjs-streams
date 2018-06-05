import { createReadStream, readFileSync } from 'fs';
import { expect } from 'chai';
import { reduce } from 'rxjs/operators';
import { fromReadStream } from '..';

describe('fromReadStream', () => {
  const filename = `${__dirname}/files/test.txt`;

  it('returns an observable with the stream contents', async () => {
    const file = createReadStream(filename);
    const EXPECTED_CONTENT = readFileSync(filename).toString();
    const observable = fromReadStream(file);
    const result = await observable.pipe(
      reduce((acc, val) => acc + val, '')
    ).toPromise();
    expect(result).to.equal(EXPECTED_CONTENT);
  });
});
