import { Entity } from "@/types/entity";

export interface IUserQuery {
  q    ?: string;
  page ?: number;
  limit?: number;
}

export interface IUserProps {
  id: string;
  email: string;
  avatarPath: string;
  roleName: string;
  fullname: string;
  isActive: boolean;
}

export class User extends Entity<IUserProps> {
  unmarshall(): IUserProps { return { ...this._props } }
  static create(props: IUserProps): User { return new User(props); }
}