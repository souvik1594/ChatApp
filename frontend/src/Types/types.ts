export type UserProps = {
  name: string;
  email: string;
};
export type ChatPageProps = {
  isGroupChat: boolean;
  users: UserProps[];
  _id: string;
  chatName: string;
};
