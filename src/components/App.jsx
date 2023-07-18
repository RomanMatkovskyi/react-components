import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendList/friendList';
import { TransactionHistory } from './transactions/transactions';
import profileData from '../data/user.json';
import statData from '../data/stats.json';
import friendList from '../data/friends.json';
import transactionData from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        imgSrc={profileData.avatar}
        stats={profileData.stats}
      />
      <Statistics label={'UPLOAD STATS'} data={statData} />
      <FriendList friendList={friendList} />
      <TransactionHistory items={transactionData} />
    </>
  );
};
