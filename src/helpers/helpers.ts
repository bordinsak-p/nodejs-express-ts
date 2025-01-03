export default class Helper {
  private bcrypt = require("bcryptjs");
  private uuid = require("uuid");

  /**
   * Hash password
   */
  public hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.bcrypt.genSalt(10, (err: Error, salt: string) => {
        if (err) reject(err);
        this.bcrypt.hash(password, salt, (err: Error, hash: string) => {
          if (err) reject(err);
          resolve(hash);
        });
      });
    });
  }

  /** 
   * Compare password with hash 
  */
  public comparePassword(password: string, hash: string): boolean {
    return this.bcrypt.compare(password, hash);
  }

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
   * handle response object
   */
  public responseObject(data: Object): Object {
    return {
      result: {
        ...data
      },
    };
  }

  /**
   * Generate UUID
   * option "splits" to split UUID
   */
  public generateUuid(option?: "splits"): string {
    switch (option) {
      case "splits":
        return this.uuid.v4().split("-")[0];
      default:
        return this.uuid.v4();
    }
  }

  /**
   * Morgan handle
   * option "track" to track request for each request
   */
  public morganHandle(option: "track" | 'dev'): string {
    switch (option) {
      case "track":
        return ':date - :method :url :status :response-time ms - :res[content-length] :track';
      default:
        return 'dev';
    }
  }

  /**
   * Handle query
   */
  public setLikeQury(quary: string): string {
    if(!quary) return 'null';
    return `%${quary}%`;
  }
}
