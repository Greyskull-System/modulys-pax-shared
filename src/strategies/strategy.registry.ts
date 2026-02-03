import { IStrategy, IStrategyMetadata } from './strategy.interface';

/**
 * Registro global de estratégias.
 * Permite registrar e recuperar estratégias por código de regra.
 */
export class StrategyRegistry {
  private static strategies: Map<string, Map<string, IStrategy<unknown, unknown>>> = new Map();
  private static metadata: Map<string, IStrategyMetadata[]> = new Map();
  private static defaults: Map<string, string> = new Map();

  /**
   * Registra uma estratégia para um código de regra
   * @param ruleCode Código da regra (ex: 'vacation.calculation')
   * @param strategy Instância da estratégia
   * @param isDefault Se é a estratégia padrão
   */
  static register<TContext, TResult>(
    ruleCode: string,
    strategy: IStrategy<TContext, TResult>,
    module: string,
    isDefault = false,
  ): void {
    if (!this.strategies.has(ruleCode)) {
      this.strategies.set(ruleCode, new Map());
      this.metadata.set(ruleCode, []);
    }

    const ruleStrategies = this.strategies.get(ruleCode)!;
    ruleStrategies.set(strategy.name, strategy as IStrategy<unknown, unknown>);

    // Registra metadata
    const meta = this.metadata.get(ruleCode)!;
    meta.push({
      name: strategy.name,
      description: strategy.description,
      module,
      ruleCode,
      isDefault,
    });

    // Se for default, registra
    if (isDefault) {
      this.defaults.set(ruleCode, strategy.name);
    }
  }

  /**
   * Recupera uma estratégia específica
   */
  static get<TContext, TResult>(
    ruleCode: string,
    strategyName: string,
  ): IStrategy<TContext, TResult> | undefined {
    const ruleStrategies = this.strategies.get(ruleCode);
    if (!ruleStrategies) return undefined;
    return ruleStrategies.get(strategyName) as IStrategy<TContext, TResult>;
  }

  /**
   * Recupera a estratégia padrão para uma regra
   */
  static getDefault<TContext, TResult>(
    ruleCode: string,
  ): IStrategy<TContext, TResult> | undefined {
    const defaultName = this.defaults.get(ruleCode);
    if (!defaultName) return undefined;
    return this.get(ruleCode, defaultName);
  }

  /**
   * Lista todas as estratégias disponíveis para uma regra
   */
  static listStrategies(ruleCode: string): IStrategyMetadata[] {
    return this.metadata.get(ruleCode) || [];
  }

  /**
   * Lista todas as regras registradas
   */
  static listRules(): string[] {
    return Array.from(this.strategies.keys());
  }

  /**
   * Verifica se uma estratégia existe
   */
  static has(ruleCode: string, strategyName?: string): boolean {
    const ruleStrategies = this.strategies.get(ruleCode);
    if (!ruleStrategies) return false;
    if (strategyName) return ruleStrategies.has(strategyName);
    return true;
  }
}
