import { initCommands } from "./commands"

const IsDebug = true;
export const EventList:BotEvent[] = [
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
    EventTriggers:[
      {
        TriggerType:TriggerType.OnSignin,
        TriggerArgument:{}
      }
    ],
    EventChance:100
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

main();
