import { create } from 'zustand'
import axios from 'axios'

const useUserStore = create((set) => ({
  user: null,
  fetchUser: async (tokenInfo) => {
    try {
      const resp = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'Application/json',
        },
      })
      const userData = resp.data;
      localStorage.setItem('user', JSON.stringify(userData));
      // Update the state with the fetched user data
      set({ user: userData });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },
  setUser: (user) => {
    set({user})
  },
  deleteUser: () => {
    localStorage.removeItem('user');
    set({user: null})
  }
}))

export default useUserStore;