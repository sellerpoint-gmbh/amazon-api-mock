import { CounterfactRequest } from './types/counterfact';
import crypto from 'crypto';

const defaultErrorMessage = {
  400: 'Request has missing or invalid parameters and cannot be parsed.',
  403: 'Forbidden',
  404: 'The resource specified does not exist.',
  409: 'The resource specified conflicts with the current state.',
  413: 'The request size exceeded the maximum accepted size.',
  415: 'The request payload is in an unsupported format.',
  429: 'The frequency of requests was greater than allowed.',
  500: 'An unexpected condition occurred that prevented the server from fulfilling the request.',
  503: 'Temporary overloading or maintenance of the server.',
};

export class ResponseFactory<T> {
  constructor(private request: CounterfactRequest) {}

  public make(statusCode: number, body: T = null) {
    if (!body) {
      if (statusCode >= 400) {
        body = {
          errors: [
            {
              code: `custom-${statusCode}`,
              message:
                defaultErrorMessage?.[statusCode] ||
                'An unexpected error occurred.',
            },
          ],
        } as T;
      }
    }

    let res = this.request.response[statusCode];

    this.request.responseHeaders['x-amzn-RequestId'] = crypto.randomUUID();

    for (const key in this.request.responseHeaders) {
      res = res.header(key, this.request.responseHeaders[key]);
    }

    console.log({
      ts: new Date().toISOString(),
      path: this.request.matchedPath,
      pathArgs: this.request.path,
      headers: this.request.headers,
      body: this.request.body,
      query: this.request.query,
      status: statusCode,
      responseBody: body,
    });

    return body ? res.json(body) : res.random();
  }
}
