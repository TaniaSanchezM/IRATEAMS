export class Event {
    
    public deporte:     String;
    public titulo:      String;
    public idCreador:   number;
    public nPersSolicitadas: number;
    public fecha: Date;
    public direccion:   String;
    public localidad:   String;
    public descripcion: String;
    public material:    Boolean;
    public pago:        Boolean;
    public urlFotoEvento:     String; 
    public id_evento : number;

    constructor(deporte:String,titulo:String,idCreador:number, nPersSolicitadas : number, fecha:Date,
        direccion:String, localidad:String, descripcion:String, material:Boolean, pago:Boolean, urlFotoEvento:String, id_evento: number){
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
            this.urlFotoEvento        =   urlFotoEvento;
            this.id_evento = id_evento;
    }
}
