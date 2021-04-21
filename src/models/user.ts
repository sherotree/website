// Copyright (c) 2021 Terminus, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { getCurrentUser, login, logout } from '~/services/login';
import { getOrgList } from '~/services/org';

import { createStore } from '~/cube';

interface IState {
  user: USER.IUser;
  orgList: ORG.IOrgItem[];
  orgHasMore: boolean;
}

const initState: IState = {
  user: {} as USER.IUser,
  orgList: [],
  orgHasMore: false,
};

const userStore = createStore({
  name: 'user',
  state: initState,
  effects: {

    async login({ call }) {
      const data = await call(login);
      if (data && data.url) {
        window.localStorage.setItem('lastPath', window.location.href);
        window.location.href = data.url;
      }
    },
    async getCurrentUser({ call, update }) {
      const res = await call(getCurrentUser);
      if (res.success) {
        update({ user: res.data });
        userStore.effects.getOrgs({ pageNo: 1, pageSize: 100 });
      }
    },

    async getOrgs({ call, update }, { pageNo, pageSize }: {pageNo: number; pageSize: number}) {
      const res = await call(getOrgList, { pageSize, pageNo });
      const { list } = res.data;
      update({
        orgList: list || [],
      });
    },
    async logout({ call }) {
      const data = await call(logout);
      if (data && data.url) {
        const url = new URL(data.url);
        userStore.reducers.clearUser();
        userStore.reducers.clearOrg();
        // temporary: specify the redirectUrl by the FE
        window.location.href = `${url.origin}${url.pathname}?redirectUrl=${window.location.href}`;
      }
    },
  },
  reducers: {
    clearUser(state) {
      state.user = {} as USER.IUser;
    },
    clearOrg(state) {
      state.orgList = [];
    },
  },
});

export default userStore;
