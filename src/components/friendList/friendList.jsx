import s from './friendList.module.css';

export const FriendList = ({ friendList }) => {
  return (
    <div>
      <ul className={s.friend_list}>
        {friendList.map(friend => (
          <li key={friend.id} className={s.item}>
            {friend.isOnline ? (
              <span className={`${s.status} ${s.statusOnline}`}></span>
            ) : (
              <span className={`${s.status} ${s.statusOffline}`}></span>
            )}
            <img
              className={s.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
