export function GetPlayerVars(ctx: seal.MsgContext): MiaoData {
    var result = seal.vars.strGet(ctx, '$mMiaoPluginsData');
    if (!result[1]) {
        let data: MiaoData = {FeedTimes:0,GivenTimes:0, SigninCombo: 0, SigninTimes: 0, LastSigninTime: null, Favorability: 0, LastFeedTime: null, LastGivenTime: null, ItemList: [] };
        seal.vars.strSet(ctx, '$mMiaoPluginsData', JSON.stringify(data))
        return data;
    } else {
        return JSON.parse(result[0]);
    }
}
export function SetPlayerVars(ctx: seal.MsgContext, data: MiaoData) {
    seal.vars.strSet(ctx, '$mMiaoPluginsData', JSON.stringify(data))
}
interface MiaoData {
    ItemList: [],//物品列表
    SigninCombo: number,//连续签到次数
    SigninTimes: number,//总签到次数
    LastSigninTime: string,//上次签到时间
    Favorability: number,//好感度
    LastFeedTime: string,//上次投喂时间
    LastGivenTime: string,//上次投喂时间
    FeedTimes: number,//当前总投喂次数
    GivenTimes: number//当前总给予次数
}

const MiaoDataEvents = [
    {
        EventType: "1", //0 签到 1 赠送礼物 2 投喂食物 3 互动
        EventTitle: "测试事件",
        EventFavorabilityThreshold: [0, -999],//好感度阈值 -999代表无上限-下限 [可选]
        EventSigninComboThreshold: [0, -999],//签到阈值 根据签到连续时间计算 [可选]
        EventSigninTimes: [0, -999],//签到阈值 根据签到总时间计算 [可选]
        EventTriggerRate: [],//事件触发几率 (需要通过上方设置阈值通过后计算) [必选]
        EventAction: [
            {
                ActionType: "FavorabilityAdd",//事件动作类型 FavorabilityAdd FavorabilityRemove FavorabilityRandom ItemGiven CallEvent 
                ActionArgument: [0, 10]//动作参数 例如 FavorabilityAdd 可以填写参数 0,5 随机变动
            }
        ]//事件动作
    }
]