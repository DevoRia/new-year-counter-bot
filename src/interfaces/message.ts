export interface Message {
  message_id: number,
  from: {
    id: number,
    is_bot: boolean,
    first_name: string,
    username: string,
    language_code: string
  },
  chat: {
    id: number,
    first_name: string,
    username: string,
    type: Type,
    all_members_are_administrators: boolean
  },
  date: Date,
  text: string,
  entities: { offset: number, length: number, type: string }[],
  new_chat_members:
    {
      id: number,
      is_bot: boolean,
      first_name: string,
      username: string
    }[],
}

export enum Type {
  PRIVATE = 'private',
  GROUP = 'group'
}