import { Request, ResponseToolkit, Lifecycle } from "@hapi/hapi";

export type MethodType =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE";

export type ScalarValue = string | number | boolean | undefined;

export type HttpResponse = {
  body?: any;
  headers?: { [key: string]: string };
  statusCode: number;
};

export type HttpInput = {
  body: any;
  headers: { [key: string]: string };
  pathParams: { [key: string]: string };
  queryParams: {
    [key: string]: string | string[];
  };
};

export type Resource = {
  uri: string;
  method: MethodType;
  handler: (input: HttpInput) => HttpResponse;
};

export type ErrorHandler = ({
  request: Request,
  responseToolkit: ResponseToolkit,
  error: Error
}) => Lifecycle.ReturnValue;