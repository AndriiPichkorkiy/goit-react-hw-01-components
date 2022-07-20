import PropTypes from 'prop-types';
import styleStats from '../css/stats.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styleStats.statistics}>
      {title ? <h2 className={styleStats.title}>{title}</h2> : ''}

      <ul className={styleStats['stat-list']}>
        {stats.map(el => {
          return (
            <li className={styleStats.item} key={el.id}>
              <span className={styleStats.label}>{el.label}</span>
              <span className={styleStats.percentage}>{el.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
