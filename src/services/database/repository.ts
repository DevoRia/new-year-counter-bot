import {GroupModel, GroupStructure} from "./models/group.model";
import {UserModel, UserStructure} from "./models/user.model";
import {MessageModel, MessageStructure} from "./models/message.model";

export class Repository {

  async saveGroup(group: GroupStructure): Promise<void> {
    let existedGroup = await GroupModel.findOne({ id: group.id });
    if (!existedGroup) existedGroup = await new GroupModel(group).save();
    return existedGroup;

  }

  async saveUser(user: UserStructure) {
    let existedUser = await UserModel.findOne({ id: user.id });
    if (!existedUser) existedUser = await new UserModel(user).save();
    return existedUser;
  }

  async saveMessage(message: MessageStructure) {
    const existedMsg = await MessageModel.findOne({ message_id: message.message_id });
    if (!existedMsg) await new MessageModel(message).save();
  }

  async findAllGroups(): Promise<GroupStructure[]> {
    return GroupModel.find();
  }

}