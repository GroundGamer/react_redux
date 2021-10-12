import {useDispatch, useSelector} from "react-redux";
import {asyncAddCash, asyncGetCash} from "./components/store/cashReducer";
import {addCostumer, asyncAddManyCostumer, removeCostumer} from "./components/store/customerReducer";
import {useEffect} from "react";

import './App.css';

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customer = useSelector(state => state.customers.customers)

    useEffect(() => {
        dispatch(asyncAddManyCostumer())
    }, [dispatch])

    return (
        <div className="app">
            <div className="block_counter">
                <p className="counter">
                    {cash}
                </p>
            </div>
            <div className="lst-btn">
                <button onClick={() => dispatch(asyncAddCash())} className="btn">Пополнить счет</button>
                <button onClick={() => dispatch(asyncGetCash())} className="btn">Снять со счета</button>
                <button onClick={() => dispatch(addCostumer({name: prompt('Введите имя'), id: customer.length+1}))} className="btn">
                    Добавить пользователя
                </button>
            </div>
            {customer.length > 0 ?
                <div className="lst-customer">
                    {customer.map(item =>
                        <div style={{padding: '5px', borderBottom: '1px dashed black'}} key={item.id} onClick={() => dispatch(removeCostumer(item.id))}>
                            <p>id: {item.id}</p>
                            <p>name: {item.name}</p>
                        </div>)}
                </div>
                : <p style={{textAlign: 'center', marginTop: '10px'}}>Список пуст!</p>}
        </div>
    );
}

export default App;
