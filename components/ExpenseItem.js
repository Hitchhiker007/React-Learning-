import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>January 31st 2023</div>
            <div className="expense-item__description">
                <h2>Insurance</h2>
                <div className="expense-item__price">$300.00</div>
            </div>
        </div>
         
           
        
    );
}

export default ExpenseItem; 