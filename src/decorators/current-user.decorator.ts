import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ICurrentUser } from '../interfaces/current-user.interface';

export const CurrentUser = createParamDecorator(
  (data: keyof ICurrentUser | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as ICurrentUser;

    if (!user) {
      return null;
    }

    return data ? user[data] : user;
  },
);
