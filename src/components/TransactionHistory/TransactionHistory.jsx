import { TransactionHistoryItem } from "./TransactionHistoryItem"; // імпорт компоненту TransactionHistoryItem
import PropTypes from 'prop-types'; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import css from './TransactionHistory.module.css'; // імпорт стилів 

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
}; // експорт компоненту TransactionHistory

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
}; // типізація (опис типів) пропсів компоненту TransactionHistory