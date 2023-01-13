import PropTypes from 'prop-types';
import './TransactionHistoryItem.module.css';
 
export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
};

TransactionHistoryItem.propTypes = {  
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,  
  id: PropTypes.string,
};