import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    const { authorization } = req.headers;

    if(!authorization){
      throw new HttpException('Unathorized', HttpStatus.UNAUTHORIZED)
    }

    if(authorization !== ''){
      throw new HttpException('Unathorized', HttpStatus.UNAUTHORIZED)
    }
    next();
  }
}
