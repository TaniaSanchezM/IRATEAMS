export class User {
    public id_usuario:      Number;
    public username:        string;
    public mail:            string;
    public password:        string;
    // public repeatPassword:  string;
    public nombreCompleto:  string;
    public fechaNacimiento: Date;
    public telefono:        string;
    public urlFoto:         string;
    public newpass:         string
    constructor(id_usuario:Number, username: string, mail:string, password:string, nombreCompleto:string, fechaNacimiento:Date, telefono:string, urlFoto:string){
        this.id_usuario = id_usuario;
        this.username = username;
        this.mail = mail;
        this.password = password;
        this.nombreCompleto = nombreCompleto;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.urlFoto = urlFoto
    }
}
