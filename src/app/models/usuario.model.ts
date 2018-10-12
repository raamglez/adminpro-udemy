export class Usuario {
  /**
   * Modelo usuario
   * @param nombre
   * @param email
   * @param password
   * @param img
   * @param role
   * @param google
   * @param _id
   */
  constructor(
    public nombre: string,
    public email: string,
    public password: string,
    public img?: string,
    public role?: string,
    public google?: boolean,
    public _id?: string
  ) {
  }
}
