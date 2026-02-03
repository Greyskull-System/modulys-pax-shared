/**
 * Interface para o serviço de configurações da empresa
 */
export interface ISettingsService {
  /**
   * Obtém uma configuração
   */
  get<T>(companyId: string, key: string, defaultValue?: T): Promise<T>;

  /**
   * Define uma configuração
   */
  set<T>(companyId: string, key: string, value: T): Promise<void>;

  /**
   * Obtém todas as configurações de um módulo
   */
  getByModule(companyId: string, module: string): Promise<Record<string, unknown>>;

  /**
   * Verifica se uma feature flag está ativada
   */
  isFeatureEnabled(companyId: string, featureCode: string): Promise<boolean>;

  /**
   * Obtém o nome da estratégia configurada para uma regra
   */
  getBusinessRuleStrategy(companyId: string, ruleCode: string): Promise<string | null>;
}

/**
 * Tipos de configurações
 */
export type SettingValue = string | number | boolean | Record<string, unknown>;

/**
 * Configuração tipada
 */
export interface ISetting<T = SettingValue> {
  key: string;
  value: T;
  type: 'STRING' | 'NUMBER' | 'BOOLEAN' | 'JSON';
  module: string;
}
