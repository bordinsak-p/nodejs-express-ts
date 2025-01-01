export default class Helper {
  private bcrypt = require("bcryptjs");
  
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
  
  public comparePassword(password: string, hash: string): boolean {
    return this.bcrypt.compare(password, hash);
  }
}
