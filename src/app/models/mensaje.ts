export class Mensaje {
    public id_mensaje:  Number;
    public id_chat:     Number;
    public id_emisor:   Number;
    public mensaje:     String;
    public fecha:       Date;
    constructor( msgId:Number,chatId:Number,idEmisor:Number,msg:String,fecha:Date){
        this.id_mensaje = msgId;
        this.id_chat    = chatId;
        this.id_emisor  = idEmisor;
        this.mensaje    = msg;
        this.fecha      = fecha;
    }
}