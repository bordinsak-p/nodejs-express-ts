export default class ResponseHelper {
  /**
   * handle response error
   */
  public responseError(errorMessage: string): Object {
    return {
      message: "error",
      error: errorMessage,
    };
  }

  /**
   * handle response
   */
  public responseObject(data: Object): Object {
    return {
      result: data,
    };
  }

  public responseList(data: Object[]): Object {
    return {
      results: data,
    };
  }
}
