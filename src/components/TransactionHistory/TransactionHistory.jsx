import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem'
import { getRandomHexColor } from 'utils/getRandomHexColor';
import PropTypes from 'prop-types';
import './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead style={{ backgroundColor: getRandomHexColor() }}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
        
      <tbody>
        {items.map(({ id, type, amount, currency }) => 
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        )}  
      </tbody>
    </table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,      
    })
  )  
};