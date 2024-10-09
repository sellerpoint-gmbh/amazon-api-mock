export interface CounterfactRequest {
  query?: Record<string, string | string[] | number | boolean>;
  path?: Record<string, string>;
  header?: Record<string, string>;
  headers?: Record<string, string>;
  body?: any;
  response?: Record<number, any>;
  context?: any;
  responseHeaders?: Record<string, string>;
  matchedPath?: string;
}
