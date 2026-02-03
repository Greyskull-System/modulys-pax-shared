import { StrategyRegistry } from './strategy.registry';
import { IStrategy } from './strategy.interface';

/**
 * Decorator para registrar automaticamente uma estratégia
 * 
 * @example
 * @Strategy('vacation.calculation', 'hr', true)
 * class DefaultVacationCalculator implements IVacationCalculator {
 *   name = 'default';
 *   description = 'Cálculo padrão de férias';
 *   // ...
 * }
 */
export function Strategy(ruleCode: string, module: string, isDefault = false) {
  return function <T extends new (...args: unknown[]) => IStrategy<unknown, unknown>>(
    constructor: T,
  ) {
    // Cria uma instância para registrar
    const instance = new constructor();
    StrategyRegistry.register(ruleCode, instance, module, isDefault);
    return constructor;
  };
}
