import PropTypes from 'prop-types';
import styleProfile from '../css/profile.module.css';

const StatsForProfile = ({ stats }) => {
  return (
    <ul className={styleProfile.stats}>
      {Object.keys(stats).map((el, i) => {
        return (
          <li key={i}>
            <span className={styleProfile.label}>{el}</span>
            <span className={styleProfile.quantity}>{stats[el]}</span>
          </li>
        );
      })}
    </ul>
  );
};

StatsForProfile.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default StatsForProfile;
