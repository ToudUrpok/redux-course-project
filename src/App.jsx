import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addUserAction, deleteUserAction } from './store/userReducer';
import { fetchUsers } from './asyncActions/users';

function App() {
    const dispatch = useDispatch();
    const amount = useSelector(state => state.cash.amount);
    const users = useSelector(state => state.users.users) 

    const addCash = (amount) => {
        dispatch({
            type: "ADD_CASH",
            payload: amount
        })
    }

    const issueCash = (amount) => {
        dispatch({
            type: "ISSUE_CASH",
            payload: amount
        })
    }

    const addUser = (name) => {
        dispatch(addUserAction({
            id: Date.now(),
            name
        }))
    }

    const removeUser = (userId) => {
        dispatch(deleteUserAction(userId))
    }

    return (
        <div className="App">
            <div style={{fontSize:"3rem"}}>
                {amount}
            </div>
            <div style={{display:"flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
                <button onClick={() => issueCash(Number(prompt()))}>Снять со счёта</button>
                <button onClick={() => addUser(prompt())}>Добавить пользователя</button>
                <button onClick={() => dispatch(fetchUsers())}>Загрузить пользователей</button>
            </div>
            {users.length > 0 
                ? 
                <div>
                    {users.map(user => 
                        <div 
                            key={user.id}
                            style={{fontSize:"2rem", border:"1px solid black", padding:"10px", marginTop:"5px"}}
                            onClick={() => removeUser(user.id)}
                        >
                            {user.name}
                        </div>
                    )}
                </div>
                : <div style={{fontSize:"2rem", marginTop:"15px"}}>Пользователей не найдено</div>
            }
        </div>
    );
}

export default App;
