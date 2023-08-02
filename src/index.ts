import { sample, toNumber } from "lodash-es";
import { GetPlayerVars, SetPlayerVars } from "./utils";

function main() {
  // 注册扩展
  let ext = seal.ext.find('com.smallmiao.cn');
  if (!ext) {
    ext = seal.ext.new('com.smallmiao.cn', 'Small_Miao', '1.0.0');
    seal.ext.register(ext);
  }
  initCommands().forEach(element => {
    ext.cmdMap[element.name] = element;
  });
}

function initCommands(){
  let Commands = [];
  const CMD_SignIn = seal.ext.newCmdItemInfo();
  CMD_SignIn.name = "签到";
  CMD_SignIn.help = "签到,格式: .签到";
  CMD_SignIn.solve = (ctx,msg,cmdArgs)=>{
    //获取玩家数据
    let playerData = GetPlayerVars(ctx);
    //判断上次签到时间是否为NULL
    let lastSigninTime = playerData.LastSigninTime != null ? playerData.LastSigninTime : 0
    //计算当天0点时间戳
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    const timestamp = date.getTime();
    //判断上次签到是否不在今天
    if(toNumber(lastSigninTime) <= timestamp){
      //更新上次签到时间
      playerData.LastSigninTime = Date();
      //增加总次数1
      playerData.SigninTimes +=1;
      //判断上次签到时间是否超过24小时
      if(timestamp - toNumber(lastSigninTime) < 24*60*60*1000){
        playerData.SigninCombo +=1;
      }else{
        playerData.SigninCombo = 1;
      }
      seal.vars.intSet(ctx,"$t当前签到次数",playerData.SigninTimes);
      seal.vars.intSet(ctx,"$t连续签到次数",playerData.SigninCombo);
      let returnText = seal.formatTmpl(ctx,"MiaoPlugin:签到成功")
      seal.replyToSender(ctx,msg,returnText);
    }else{
      let returnText = seal.formatTmpl(ctx,"MiaoPlugin:签到失败")
      seal.replyToSender(ctx,msg,returnText);
    }
    SetPlayerVars(ctx,playerData);
    return seal.ext.newCmdExecuteResult(true);
  }
  const CMD_Gift = seal.ext.newCmdItemInfo();
  CMD_Gift.name = "赠送";
  CMD_Gift.help = "赠送,格式: .赠送 <礼物名称> [数量]"
  CMD_Gift.solve = (ctx,msg,cmdArgs) => {
    //todo
    return seal.ext.newCmdExecuteResult(true);
  }
  Commands.push(CMD_SignIn);
  return Commands;
}

main();
