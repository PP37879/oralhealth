export class Connect {
    private static hostUrl = 'http://localhost/OralHealth_project';
    public static readonly USER_TOKEN = 'user_token';
    static getHostUrl():string {
      return this.hostUrl;
    }
  }