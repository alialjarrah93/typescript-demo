import { AppGlobalState } from '../App';
import { UsersGlobalState } from '../Users';

export interface StoreState {
  app: AppGlobalState;
  users: UsersGlobalState;
}
