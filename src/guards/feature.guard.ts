import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const REQUIRED_FEATURE_KEY = 'required_feature';

/**
 * Decorator para marcar endpoints que requerem uma feature específica
 * 
 * @example
 * @RequireFeature(FEATURES.HR.EMPLOYEES)
 * @Get()
 * findAll() { ... }
 * 
 * @example
 * // Requer múltiplas features (AND)
 * @RequireFeature(FEATURES.HR.EMPLOYEES, FEATURES.HR.EMPLOYEES_DOCUMENTS)
 * @Post('documents')
 * uploadDocument() { ... }
 */
export function RequireFeature(...features: string[]) {
  return (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) => {
    Reflect.defineMetadata(REQUIRED_FEATURE_KEY, features, descriptor?.value ?? target);
    return descriptor ?? target;
  };
}

/**
 * Interface que o SettingsService deve implementar
 * (está em settings.interface.ts)
 */
export interface IFeatureChecker {
  isFeatureEnabled(companyId: string, featureCode: string): Promise<boolean>;
}

/**
 * Guard que verifica se as features requeridas estão habilitadas para a empresa
 * 
 * Deve ser registrado no módulo:
 * providers: [
 *   {
 *     provide: 'FEATURE_CHECKER',
 *     useExisting: SettingsService,
 *   },
 *   FeatureGuard,
 * ]
 */
@Injectable()
export class FeatureGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    // Injeta o service que verifica features
    // @Inject('FEATURE_CHECKER') private featureChecker: IFeatureChecker,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredFeatures = this.reflector.get<string[]>(
      REQUIRED_FEATURE_KEY,
      context.getHandler(),
    );

    // Se não há features requeridas, permite acesso
    if (!requiredFeatures || requiredFeatures.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user?.companyId) {
      throw new ForbiddenException('Usuário não autenticado ou sem empresa');
    }

    // Verifica cada feature requerida
    // TODO: Descomentar quando o FEATURE_CHECKER estiver disponível
    // for (const feature of requiredFeatures) {
    //   const isEnabled = await this.featureChecker.isFeatureEnabled(user.companyId, feature);
    //   if (!isEnabled) {
    //     throw new ForbiddenException(`Funcionalidade '${feature}' não está habilitada para sua empresa`);
    //   }
    // }

    return true;
  }
}
