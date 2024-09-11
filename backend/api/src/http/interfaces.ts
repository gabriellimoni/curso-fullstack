export interface Controller {
  handle(req: HttpRequest): Promise<HttpResponse>;
}

export interface HttpRequest {
  params?: any;
  body?: any;
  query?: any;
}

export interface HttpResponse {
  status: number;
  data?: any;
}
