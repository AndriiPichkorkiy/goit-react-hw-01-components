//components
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory ';

//imitation data frome backEnd
import data from './dataFromBackEnd/data';

export const App = () => {
  return (
    <div>
      {<Profile {...data.user} />}
      {<FriendList friends={data.friends} />}

      {<Statistics title="Upload stats" stats={data.data} />}
      {<Statistics stats={data.data} />}

      {<TransactionHistory transactions={data.transactions} />}
    </div>
  );
};
