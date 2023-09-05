import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';

function Row({ name, value, currency, date, transactionType, onDelete }) {

    const handleDeleteClick = () => {
        onDelete();
    };

    return (
        <div
            className={
                transactionType === 'income'
                ? "dashboard-row w-full flex gap-5 bg-slate-100 items-center justify-around h-auto py-8 mt-6 rounded-lg shadow-xl"
                : "dashboard-row w-full flex gap-5 bg-slate-100 items-center justify-around h-auto py-8 mt-6 rounded-lg shadow-xl"
            }
        >   
            <div className='mobile-div w-full flex justify-around'>
                <div className="flex flex-col w-1/6">
                    <h3 className="text-sm text-black">Name:</h3>
                    <p className="text-lg font-bold">
                        {
                            name.length < 30
                            ? name
                            : `${name.slice(0,30)}...`
                        }
                    </p>
                </div>
                <div className="flex flex-col w-1/6">
                    <h3 className="text-sm text-black">{currency}:</h3>
                    <p className="text-lg font-bold">
                        {
                            value.length < 20
                            ? value
                            : `${value.slice(0,20)}...`
                        }
                    </p>
                </div>
            </div>
            <div className='mobile-div w-full flex justify-around'>
                <div className="flex flex-col w-1/6">
                    <h3 className="text-sm text-black">Date:</h3>
                    <p className="text-lg font-bold">{date.split("-").reverse().join("/")}</p>
                </div>
                <div className="flex flex-col w-1/6">
                    {
                        transactionType === 'income'
                        ? <FaArrowCircleUp className='text-green-700 w-8 h-8' />
                        : <FaArrowCircleDown className='text-red-600 w-8 h-8'/>
                    }
                </div>
                <div>
                    <button 
                        className='text-sm text-red-500 hover:text-red-700'
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Row;