//import { IUser } from "@/models/User.model";

interface IUser {
  name: string;
}

const state = {
  user: {},
  token: null,
  isAuthenticated: false,
};

const getters = {
  // @ts-ignore
  getUser: (state) => state.user,
  // @ts-ignore
  getToken: (state) => state.token,
  // @ts-ignore
  isAuthenticated: (state) => state.isAuthenticated,
  // @ts-ignore
  isDRD: (state) => state.user.isDRD,
  // @ts-ignore
  isBFC: (state) => state.user.isBFC,
};

const mutations = {
  // @ts-ignore
  setUser(state, user: IUser) {
    state.user = user;
  },
  // @ts-ignore
  setToken(state, token: string) {
    state.token = token;
  },
  // @ts-ignore
  setIsAuthenticated(state, auth: boolean) {
    state.isAuthenticated = auth;
  },
};

const actions = {};

export default { state, getters, mutations, actions };
