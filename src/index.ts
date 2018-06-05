import * as stream from 'stream';
import { Observable } from 'rxjs';

export const fromReadStream = (stream: stream.Readable): Observable<string> =>
  Observable.create((observer) => {
    stream.on('end', () => observer.complete());
    stream.on('close', () => observer.complete());
    stream.on('error', error => observer.error(error));
    stream.on('data', chunk => observer.next(chunk));
  });
