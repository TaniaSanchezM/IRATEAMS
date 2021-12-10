export class Mensaje {
    public msgId:       Number;
    public chatId:      Number;
    public idEmisor:    Number;
    public msg:         String;
    public fecha:       Date;
    constructor( msgId:Number,chatId:Number,idEmisor:Number,msg:String,fecha:Date){
        this.msgId       = msgId;
        this.chatId      = chatId;
        this.idEmisor    = idEmisor;
        this.msg         = msg;
        this.fecha       = fecha;
    }
}
