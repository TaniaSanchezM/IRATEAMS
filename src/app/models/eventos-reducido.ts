export class EventosReducido {
    public eventId:     Number;
    public titulo:      String;
    public fechaEvento: Date;
    public direccion:   String;
    public localidad:   String;

    constructor(eventId:Number,titulo:String,fechaEvento:Date,direccion:String,localidad:String){
        this.eventId     = eventId    ;
        this.titulo      = titulo     ;
        this.fechaEvento = fechaEvento;
        this.direccion   = direccion  ;
        this.localidad   = localidad  ;
    }
}
