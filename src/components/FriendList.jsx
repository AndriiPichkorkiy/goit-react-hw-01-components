import PropTypes from 'prop-types';
import styleFriends from '../css/friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styleFriends['friend-list']}>
      {friends.map(el => {
        const statusStyle = [styleFriends.status];
        statusStyle.push(
          el.isOnline
            ? styleFriends['status-online']
            : styleFriends['status-offline']
        );
        return (
          <li className={styleFriends.item} key={el.id}>
            <span className={statusStyle.join(' ')}>
              {el.isOnline ? 'online' : 'offline'}
            </span>
            <img
              className={styleFriends.avatar}
              src={el.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styleFriends.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
