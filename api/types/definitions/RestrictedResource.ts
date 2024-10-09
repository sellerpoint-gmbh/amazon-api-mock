export type RestrictedResource = {
  method: "GET" | "PUT" | "POST" | "DELETE";
  path: string;
  dataElements: Array<string>;
};
