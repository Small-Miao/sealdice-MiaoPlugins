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
export function initPlayerData() : PlayerData{
    return {FeedTimes:0,GivenTimes:0, SigninCombo: 0, SigninTimes: 0, LastSigninTime: null, Favorability: 0, LastFeedTime: null, LastGivenTime: null, ItemList: [] };
}
