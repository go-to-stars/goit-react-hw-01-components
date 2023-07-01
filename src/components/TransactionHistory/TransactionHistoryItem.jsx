import PropTypes from 'prop-types'; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}; // експорт компоненту TransactionHistoryItem

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}; // типізація (опис типів) пропсів компоненту TransactionHistoryItem
