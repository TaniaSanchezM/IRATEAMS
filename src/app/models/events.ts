export class Event {
    
    public deporte:     string;
    public titulo:      string;
    public idCreador:   number;
    public nPersSolicitadas: number;
    public fecha: Date;
    public direccion:   string;
    public localidad:   string;
    public descripcion: string;
    public material:    Boolean;
    public pago:        Boolean;
    public urlFotoEvento:     string;  
    public id_evento : number;    

    constructor(deporte:string,titulo:string,idCreador:number, nPersSolicitadas : number, fecha:Date,
        direccion:string, localidad:string, descripcion:string, material:Boolean, pago:Boolean, urlFotoEvento:string, id_evento: number)
    {
            
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
            this.urlFotoEvento       =   urlFotoEvento;
            this.id_evento      = id_evento;
    }
}
