import {GroupModel, GroupStructure} from "./models/group.model";
import {UserModel, UserStructure} from "./models/user.model";
import {MessageModel, MessageStructure} from "./models/message.model";

export class Repository {

  async saveGroup(group: GroupStructure): Promise<void> {
    const existedGroup = await GroupModel.findOne({ id: group.id });
    if (!existedGroup) await new GroupModel(group).save();
  }

  async saveUser(user: UserStructure) {
    const existedUser = await UserModel.findOne({ id: user.id });
    if (!existedUser) await new UserModel(user).save();
  }

  async saveMessage(message: MessageStructure) {
    const existedMsg = await MessageModel.findOne({ message_id: message.message_id });
    if (!existedMsg) await new MessageModel(message).save();
  }

  async findAllGroups(): Promise<GroupStructure[]> {
    return GroupModel.find();
  }

}