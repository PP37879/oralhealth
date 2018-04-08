export class Connect {
    private static hostUrl = 'http://oralhealthstatuscheck.com';
    public static readonly USER_TOKEN = 'user_token';
    static getHostUrl():string {
      return this.hostUrl;
    }
  }