export function initCommands(){
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

export function CMD_Signin_Execute(ctx:seal.MsgContext,msg:seal.Message,cmdArgs:seal.CmdArgs){
    return seal.ext.newCmdExecuteResult(true);
}

export function CMD_Gift_Execute(ctx:seal.MsgContext,msg:seal.Message,cmdArgs:seal.CmdArgs){
    return seal.ext.newCmdExecuteResult(true);
}

export function CMD_Feed_Execute(ctx:seal.MsgContext,msg:seal.Message,cmdArgs:seal.CmdArgs){
    return seal.ext.newCmdExecuteResult(true);
}

export function CMD_Interact_Execute(ctx:seal.MsgContext,msg:seal.Message,cmdArgs:seal.CmdArgs){
    return seal.ext.newCmdExecuteResult(true);
}

export function CMD_Status_Execute(ctx:seal.MsgContext,msg:seal.Message,cmdArgs:seal.CmdArgs){
    return seal.ext.newCmdExecuteResult(true);
}