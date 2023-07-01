import PropTypes from 'prop-types'; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import css from './Statistic.module.css'; // імпорт стилів

export const Statistics = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}> {title} </h2>}
        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              className={css.item}
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
} // експорт компоненту Statistics

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} // функція генерування випадкового кольору в форматі HEX (JS, ДЗ №6)

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  }; // типізація (опис типів) пропсів компоненту Statistics  
