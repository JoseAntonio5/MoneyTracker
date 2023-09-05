'use client';
import { useState, useEffect } from "react";
import Transaction from "../../utils/Transaction";
import Row from "../../components/Row";

function Dashboard() {
    const [name, setName] = useState('');
    const [value, setValue] = useState(0);
    const [currency, setCurrency] = useState('BRL');
    const [date, setDate] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    // this is being used to mock the behavior of a database
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        if (database.length !== 0) {
            const totalIncome = database.reduce((acc, item) => {
                if (item.transactionType === 'income') {
                    return acc + parseFloat(item.value);
                }
                return acc;
            }, 0);

            const totalOutcome = database.reduce((acc, item) => {
                if (item.transactionType === 'expense') {
                    return acc + parseFloat(item.value);
                }
                return acc;
            }, 0);

            setTotalIncome(totalIncome);
            setTotalExpense(totalOutcome);
        }
    }, [database]);
    

    useEffect(() => {
        setTransactionType('income');
    }, []);
    

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    
    const onOptionChange = (e) => {
        setTransactionType(e.target.value);
    }

    const handleRowCreation = (name, value, currency, date, transactionType) => {
        if (database.length < 30) {
            const newRow = new Transaction(name, value, currency, date, transactionType);
    
            try {
                setDatabase([...database, newRow]);
            } catch (error) {
                console.error('Error saving to the database. Try again later.');
            }
        } else {
            console.error('Database is already at maximum capacity (30 elements).');
        }
    }

    const handleRowDeletion = (index) => {
        const updatedDatabase = [...database];
        updatedDatabase.splice(index, 1); // Remove the element at the given index
        setDatabase(updatedDatabase);
    };

    return (
        <main>
            <div className="blue-gradient">
                <div className='w-full h-auto pt-10'>
                    <h1 className='text-5xl font-bold text-center'>Hello, Guest</h1>
                    <div className="dashboard-money-info w-full pt-10 flex items-center justify-evenly">
                        <h2 className="text-2xl font-bold">
                            Total income: <span className="text-green-700">$ {totalIncome}</span>
                        </h2>
                        <h2 className="text-3xl font-bold">
                            Total: $ {totalIncome - totalExpense}
                        </h2>
                        <h2 className="text-2xl font-bold">
                            Total Expenses: <span className="text-red-600">$ {totalExpense}</span>
                        </h2>
                    </div>
                </div>
                <div className='w-full h-auto py-5'>
                    <form className='dashboard-form flex items-center justify-around gap-5 mx-10'>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder='Transaction Name'
                            className='w-full pl-2 py-2 rounded-xl shadow-lg'
                            onChange={handleNameChange}
                            required
                        />
                        
                        <div className="relative rounded-md shadow-lg">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input 
                                type="text" 
                                name="value" 
                                id="value" 
                                className="py-2 block w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                placeholder="0.00"
                                onChange={handleValueChange}
                                required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="currency" className="sr-only">Currency</label>
                                <select 
                                    id="currency" 
                                    name="currency" 
                                    onChange={handleCurrencyChange}
                                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                >
                                    <option>BRL</option>
                                    <option>EUR</option>
                                    <option>USD</option>
                                </select>
                            </div>
                        </div>

                        <input 
                            type="date" 
                            className="w-64 py-2 pl-2 rounded-lg shadow-lg"
                            onChange={handleDateChange}
                        />

                        <label htmlFor='income' className="text-lg font-bold">Income</label>
                        <input 
                            type="radio" 
                            name="income_expense" 
                            value="income" 
                            id="income"
                            className="w-12 h-12"
                            checked={transactionType === 'income'}
                            onChange={onOptionChange}
                        />
                        <label htmlFor='expense' className="text-lg font-bold">Expanse</label>
                        <input 
                            type="radio" 
                            name="income_expense" 
                            value="expense"
                            id="expense"
                            className="w-12 h-12"
                            checked={transactionType === 'expense'}
                            onChange={onOptionChange}
                        />
                        <button 
                            type="button" 
                            onClick={() => { handleRowCreation(name, value, currency, date, transactionType) }}
                            className="dashboard-btn text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >Add</button>
                    </form>
                </div>
            </div>

            <div className="w-full h-screen bg-slate-50">
                <h1 className="ml-12 text-5xl font-bold pt-10">Your finances:</h1>
                    <div className="flex gap-2 items-center flex-col w-11/12 m-auto">
                        {
                            database.length === 0
                            ? <h1>You have no rows created yet.</h1>
                            : database.map((item, index) => (
                                <Row
                                    key={index}
                                    name={item.name}
                                    value={item.value}
                                    currency={item.currency}
                                    date={item.date}
                                    transactionType={item.transactionType}
                                    onDelete={() => handleRowDeletion(index)}
                                />
                            ))
                        }
                    </div>
                    {
                        database.length >= 30 && (
                            <div className="w-full flex justify-center items-center flex-col py-32 bg-red-200 shadow-2xl">
                                <h1 className="text-3xl text-red-600">DATABASE IS FULL</h1>
                                <p className="py-4 text-slate-600 text-center">The maximum limit of 30 transactions has been reached. This is a mock database and does not support additional entries.</p>
                            </div>
                        )
                    }
            </div>
        </main>
    )
}

export default Dashboard;