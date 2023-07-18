import s from './transactions.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <section className={s.transaction}>
      <table className={s.transaction_history}>
        <thead className={s.title}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={s.list}>
          {items.map(item => (
            <tr key={item.id} className={s.iteam}>
              <td className={s.itemTitle}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
