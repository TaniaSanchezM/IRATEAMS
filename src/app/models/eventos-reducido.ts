export class EventosReducido {
    public id_evento:    number;
    public titulo:      String;
    public fecha:       Date;
    public direccion:   String;
    public localidad:   String;

    constructor(id_evento:number,titulo:String,fecha:Date,direccion:String,localidad:String){
        this.id_evento   = id_evento    ;
        this.titulo      = titulo     ;
        this.fecha       = fecha;
        this.direccion   = direccion  ;
        this.localidad   = localidad  ;
    }
}
