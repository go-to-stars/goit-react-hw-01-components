import { TransactionHistoryItem } from "./TransactionHistoryItem";
import PropTypes from 'prop-types'; // перевірка типів пропсів для компонента
import css from './TransactionHistory.module.css'; // імпорт стилів для компонента

export const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactionWrapper}>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};