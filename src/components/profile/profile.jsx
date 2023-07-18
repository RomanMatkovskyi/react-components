import s from './profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, imgSrc, stats }) => {
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={imgSrc} alt="User avatar" width={150} className="avatar" />
        <h2 className={s.name}>{username}</h2>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  imgSrc: PropTypes.string,
  stats: PropTypes.object,
};
