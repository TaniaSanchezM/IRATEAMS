export class Event {
    public eventId:     Number;
    public deporte:     String;
    public titulo:      String;
    public idCreador:   Number;
    public nPersSolicitadas: Number;
    public fecha: Date;
    public direccion:   String;
    public localidad:   String;
    public descripcion: String;
    public material:    Boolean;
    public pago:        Boolean;
    public urlFoto:     String;      
    constructor(deporte:String,titulo:String,idCreador:Number, nPersSolicitadas : Number, fecha:Date,
        direccion:String, localidad:String, descripcion:String, material:Boolean, pago:Boolean, urlFoto:String){
            this.deporte        =   deporte;
            this.titulo         =   titulo;
            this.idCreador      =   idCreador;
            this.nPersSolicitadas    =   nPersSolicitadas;
            this.fecha    =   fecha;
            this.direccion      =   direccion;
            this.localidad      =   localidad;
            this.descripcion    =   descripcion;
            this.material       =   material;
            this.pago           =   pago;
            this.urlFoto        =   urlFoto;
    }
}
