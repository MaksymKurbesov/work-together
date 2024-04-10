import "jquery";

declare global {
  interface JQuery {
    pagination(options?: any): JQuery;
  }
}
