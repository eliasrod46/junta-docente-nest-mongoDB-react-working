import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { BaseService } from './base.service';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('/')
export class BaseController {
  constructor(private readonly baseService: BaseService) {}

  @Get()
  index(@Req() req: Request, @Res() res: Response) {
    return res.status(200).json({
      msg: 'seee',
    });
  }

  @Get('new')
  @HttpCode(201)
  somethingNew() {
    return 'somethingNew';
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return 'notFoundPage';
  }

  @Get('error')
  @HttpCode(500)
  errorPage() {
    return 'errorPage';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('active/:status')
  @UseGuards(AuthGuard)
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
    return status;
  }
}
