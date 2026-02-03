export class ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  statusCode?: number;

  static success<T>(data: T, message?: string): ApiResponse<T> {
    const response = new ApiResponse<T>();
    response.success = true;
    response.data = data;
    response.message = message;
    return response;
  }

  static error<T = null>(error: string, statusCode?: number): ApiResponse<T> {
    const response = new ApiResponse<T>();
    response.success = false;
    response.error = error;
    response.statusCode = statusCode;
    return response;
  }
}
