import { EventList } from ".";

export function GetPlayerData(ctx: seal.MsgContext): PlayerData {
    var result = seal.vars.strGet(ctx, '$mMiaoPluginsData');
    if (!result[1]) {
        let data: PlayerData = initPlayerData();
        seal.vars.strSet(ctx, '$mMiaoPluginsData', JSON.stringify(data))
        return data;
    } else {
        return JSON.parse(result[0]);
    }
}
export function SetPlayerData(ctx: seal.MsgContext, data: PlayerData) {
    seal.vars.strSet(ctx, '$mMiaoPluginsData', JSON.stringify(data))
}
export function initPlayerData(): PlayerData {
    return { FeedCounter: 0, GivenCounter: 0, SigninCombo: 0, SigninTimes: 0, LastSigninTime: null, Favorability: 0, LastFeedTime: null, LastGivenTime: null, ItemList: [] };
}
function GetEventByTriggerType(triggerType: TriggerType): BotEvent[] {
    return EventList.filter((event) => {
        var result = false;
        event.EventTriggers.forEach((element) => {
            if (element.TriggerType == triggerType) result = true;
        });
        return result;
    })
}
function CheckEventArgument(event:BotEvent,args:object,PlayerData:PlayerData):boolean{
    
    return false;
}
export function OnExecuteEvent(triggerType: TriggerType, playerData: PlayerData) {
    let preOnTriggerEvents = GetEventByTriggerType(triggerType);
    let randomEventList: BotEvent[] = [];
    preOnTriggerEvents.forEach((element) => {
        for (let index = 0; index < element.EventChance; index++) {
            randomEventList.push(element);
        }
    })

}