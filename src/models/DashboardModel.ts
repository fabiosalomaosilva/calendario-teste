import { UserModel } from "./UserModel";

export interface DashboardModel {
    toggleSideBar: boolean;
    isAuthenticate: boolean;
    user: UserModel;
}
