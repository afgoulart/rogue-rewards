import { Injectable } from '@nestjs/common';

import * as PKG from '../package.json';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: 'Hello World!',
      version: PKG.version,
    };
  }
}
