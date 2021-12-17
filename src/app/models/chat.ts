export class Chat {
    public id_chat: number;
    public id_user1: number;
    public id_user2: number;
    constructor(id_user1: number, id_user2:number, id_chat: number){
        
        this.id_user1 = id_user1;
        this.id_user2 = id_user2;
        this.id_chat = id_chat;
    }
}
