import PropTypes from 'prop-types';
import transaction from '../css/transaction.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={transaction['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(el => {
          return (
            <tr key={el.id} className={transaction.row}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
