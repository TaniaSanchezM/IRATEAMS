export class Chat {
    public chatId:  Number;
    public user1Id: Number;
    public user2Id: Number;
    constructor(chatId: Number, user1Id: Number, user2Id: Number) {
        this.chatId     = chatId;
        this.user1Id    = user1Id;
        this.user2Id    = user2Id;
    }
}
