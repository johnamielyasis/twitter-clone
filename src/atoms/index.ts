import { atom } from 'recoil';

export const tweetsAtom = atom({
  key: 'tweets',
  default: [
    {
      fullname: 'Benjamin Franklin',
      username: 'alwayshunnid',
      avatar: 'https://s17026.pcdn.co/wp-content/uploads/sites/13/2018/09/AdobeStock_193197436.jpeg',
      body: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    },
    {
      fullname: 'Walt Disney',
      username: 'mc.moneybags',
      avatar: 'https://yt3.ggpht.com/ytc/AAUvwnizY0dv80efccMA3OPWFU8gfBHoGA98Rvg9_xGrtg=s240-c-k-c0x00ffffff-no-rj',
      body: `The way to get started is to quit talking and begin doing.`,
    },
    {
      fullname: 'Steve Jobs',
      username: 'windows_vista_sucks',
      avatar: 'https://cdn.dribbble.com/users/160522/screenshots/1179084/stevejobs-01.jpg',
      body: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
    },
  ],
});