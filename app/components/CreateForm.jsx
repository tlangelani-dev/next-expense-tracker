import { addExpense } from '@/app/server-actions/addExpense';

const CreateForm = () => {
    return (
        <div className="container mx-auto p-6">
            <form action={addExpense}>
                <div className="block mb-2">
                    <label htmlFor="title" className="block mb-1 text-gray-600">Title</label>
                    <input className="appearance-none border rounded w-full p-2" type="text" id="title" name="title" required />
                </div>
                <div className="block mb-2">
                    <label htmlFor="type" className="block mb-1 text-gray-600">Type</label>
                    <select className="w-full border rounded p-2" name="type" id="type">
                        <option value="Deposit">Deposit</option>
                        <option value="Withdraw">Withdraw</option>
                    </select>
                </div>
                <div className="block mb-2">
                    <label htmlFor="amount" className="block mb-1 text-gray-600">Amount</label>
                    <input className="appearance-none border rounded w-full p-2" type="number" id="amount" name="amount" required />
                </div>
                <button className="bg-slate-700 hover:bg-slate-900 transition text-white py-2 px-4 rounded my-3" type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

export default CreateForm
