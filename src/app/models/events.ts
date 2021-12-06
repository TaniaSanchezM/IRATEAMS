export class Events {
    public eventId:     Number;
    public deporte:     String;
    public titulo:      String;
    public idCreador:   Number;
    public numPersonas: Number;
    public fechaEvento: Date;
    public direccion:   String;
    public localidad:   String;
    public descripcion: String;
    public material:    Boolean;
    public pago:        Boolean;
    public urlFoto:     String;      
    constructor(deporte:String,titulo:String,idCreador:Number, numPersonas: Number, fechaEvento:Date,
        direccion:String, localidad:String, descripcion:String, material:Boolean, pago:Boolean, urlFoto:String){
            this.deporte        =   deporte;
            this.titulo         =   titulo;
            this.idCreador      =   idCreador;
            this.numPersonas    =   numPersonas;
            this.fechaEvento    =   fechaEvento;
            this.direccion      =   direccion;
            this.localidad      =   localidad;
            this.descripcion    =   descripcion;
            this.material       =   material;
            this.pago           =   pago;
            this.urlFoto        =   urlFoto;
    }
}
