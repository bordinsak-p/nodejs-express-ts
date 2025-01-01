export default class MessagesConstants {
  public static readonly SERVER_IS_RUNNING = [
    " _____                                   _             _           _ ",
    "|  ___|                                 | |           | |         | |",
    "| |____  ___ __  _ __ ___  ___ ___   ___| |_ __ _ _ __| |_ ___  __| |",
    "|  __\\ \\/ / '_ \\| '__/ _ \\/ __/ __| / __| __/ _` | '__| __/ _ \\/ _` |",
    "| |___>  <| |_) | | |  __/\\__ \\__ \\ \\__ \\ || (_| | |  | ||  __/ (_| |",
    "\\____/_/\\_\\ .__/|_|  \\___||___/___/ |___/\\__\\__,_|_|   \\__\\___|\\__,_|",
    "          | |                                                         ",
    "          |_|                                                         ",
    "",
    "Express App is running! 🚀",
    "Listening on http://localhost:{port}"
  ].join('\n');
  public static readonly CONNECT_DATABASE = "Connected to the database success. {db} 🗃️";
  public static readonly CONNECT_DATABASE_ERROR = "Error connecting to the database: {err}";
  public static readonly SUCCESS = "Success";
  public static readonly ERROR = "Error";
  public static readonly NOT_FOUND = "Not Found";
}