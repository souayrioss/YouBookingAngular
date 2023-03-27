export class DtoResponse<T> {
  public status!:string;
  public message!:string;
  public data!:T;
}
