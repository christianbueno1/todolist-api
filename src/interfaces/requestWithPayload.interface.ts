import { Request } from 'express';

export interface RequestWithPayload extends Request {
  user: Promise<any>;
}