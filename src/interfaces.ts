interface PlayerData {
    ItemList: Item[];//物品列表
    SigninCombo: number;//连续签到次数
    SigninTimes: number;//总签到次数
    LastSigninTime: string;//上次签到时间
    Favorability: number;//好感度
    LastFeedTime: string;//上次投喂时间
    LastGivenTime: string;//上次投喂时间
    FeedCounter: number;//当前总投喂次数
    GivenCounter: number;//当前总给予次数
}

interface Item{
    ItemName:string;
    ItemDesc:string;
    ItemType:ItemType;
    ItemActions:Action[];
}

interface Action{
    ActionType:ActionType;
    ActionArgument:object;
}

interface BotEvent{
    EventTitle:string;
    EventTriggers:Trigger[];
    EventActions:Action[];
    EventChance:number;
}

interface Trigger{
    TriggerType:TriggerType;
    TriggerArgument:object;
}

enum ItemType{
    Gift,
    Food
}

enum ActionType{
    ModifyFavorability,
    GiveItem,
    ReplayCustomText
}

enum TriggerType{
    OnSignin,
    OnFeedFood,
    OnGiftItem,
    OnInteract
}

enum TriggerArguments{
    SigninCombo,
    SinginTimes,
    Favorability,
    LastFeedTime,
    LastGivenTime,
    FeedCounter,
    GivenCounter,
}