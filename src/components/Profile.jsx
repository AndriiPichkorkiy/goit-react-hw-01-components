import PropTypes from 'prop-types';
import StatsForProfile from './StatsForProfile';

import styleProfile from '../css/profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
  imgAlt = 'User avatar',
}) => {
  return (
    <div className={styleProfile.profile}>
      <div className={styleProfile.description}>
        <img src={avatar} alt={imgAlt} className={styleProfile.avatar} />
        <p className={styleProfile.name}>{username}</p>
        <p className={styleProfile.tag}>{'@' + tag}</p>
        <p className={styleProfile.location}>{location}</p>
      </div>
      <StatsForProfile stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  imgAlt: PropTypes.string,
};

export default Profile;
