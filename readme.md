# RxJS-Streams

Adds functions to work with Streams with Rx.

Currently only `fromReadStream` is implemented.
Usage:
```typescript
import import { fromReadStream } from 'rxjs-streams';

const stream = createStremSomehow();
const observable = fromReadStream(stream);
observable.pipe(
  //... do stuff
);
