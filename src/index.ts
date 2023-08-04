import { CMD_Feed_Execute, CMD_Gift_Execute, CMD_Interact_Execute, CMD_Signin_Execute, CMD_Status_Execute } from "./commands"

const IsDebug = true;
const EventList:BotEvent[] = [
  {
    EventTitle:"这是签到测试事件",
    EventActions:[
      {
        ActionType:ActionType.ModifyFavorability,
        ActionArgument:{
          Value:-10
        }
      },
      {
        ActionType:ActionType.ReplayCustomText,
        ActionArgument:{
          Value:"这是测试回复语句"
        }
      }
    ],
    EventTrigger:[
      {
        TriggerType:TriggerType.OnSignin,
        TriggerArgument:{}
      }
    ],
    EventRate:100
  }
];
const ItemList:Item[] = [];
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
  CMD_SignIn.help = ""
  CMD_SignIn.solve = CMD_Signin_Execute;
  Commands.push(CMD_SignIn);

  const CMD_Gift = seal.ext.newCmdItemInfo();
  CMD_Gift.name = "赠送";
  CMD_Gift.help = "";
  CMD_Gift.solve = CMD_Gift_Execute;
  Commands.push(CMD_SignIn);

  const CMD_Feed = seal.ext.newCmdItemInfo();
  CMD_Feed.name = "投喂";
  CMD_Feed.help = "";
  CMD_Feed.solve = CMD_Feed_Execute;
  Commands.push(CMD_Feed);

  const CMD_Interact = seal.ext.newCmdItemInfo();
  CMD_Interact.name = "互动";
  CMD_Interact.help = "";
  CMD_Interact.solve = CMD_Interact_Execute;
  Commands.push(CMD_Interact);

  const CMD_Status = seal.ext.newCmdItemInfo();
  CMD_Status.name = "状态";
  CMD_Status.help = "";
  CMD_Status.solve = CMD_Status_Execute;
  Commands.push(CMD_Status);
  return Commands;
}

main();
