import { Response, Request } from 'express';

export interface GqlContext {
  res: Response;
  req: Request;
}
