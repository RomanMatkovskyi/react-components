import s from './statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ label, data }) => {
  return (
    <section className={s.statistics}>
      {label && <h2 className={s.title}>{label}</h2>}
      <ul className={s.stat_list}>
        {data.map(el => (
          <li
            key={el.id}
            className={s.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <div>
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
};
