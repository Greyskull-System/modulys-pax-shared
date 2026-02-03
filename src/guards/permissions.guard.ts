import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
import { ICurrentUser } from '../interfaces/current-user.interface';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as ICurrentUser;

    if (!user) {
      return false;
    }

    // Admin tem todas as permissões
    if (user.isAdmin) {
      return true;
    }

    // Verifica se o usuário tem pelo menos uma das permissões requeridas
    return requiredPermissions.some((permission) =>
      user.permissions.includes(permission),
    );
  }
}
