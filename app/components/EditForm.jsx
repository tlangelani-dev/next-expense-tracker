'use client';

import { useState } from 'react';
import { updateExpense } from '@/app/server-actions/updateExpense';

const EditForm = ({ expense }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: expense.title,
        type: expense.type,
        amount: expense.amount,
    });

    const handleChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });

    return (
        <div>
            <button onClick={() => setShowModal(true)} className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 my-1  rounded">
                Edit
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <span
                            className="close text-white text-2xl leading-none hover:text-gray-300 cursor-pointer flex justify-end"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </span>
                        <form action={updateExpense} onSubmit={() => setShowModal(false)}>
                            <input type="hidden" name="id" value={expense.id} />
                            <div className="block mb-2">
                                <label htmlFor="title" className="block mb-1 text-gray-300">Title</label>
                                <input className="appearance-none border rounded w-full p-2" type="text" id="title" name="title" onChange={handleChange} required value={formData.title} />
                            </div>
                            <div className="block mb-2">
                                <label htmlFor="type" className="block mb-1 text-gray-300">Type</label>
                                <select className="w-full border rounded p-2" name="type" id="type"  value={formData.type} onChange={handleChange}>
                                    <option value="Deposit">Deposit</option>
                                    <option value="Withdraw">Withdraw</option>
                                </select>
                            </div>
                            <div className="block mb-2">
                                <label htmlFor="amount" className="block mb-1 text-gray-300">Amount</label>
                                <input className="appearance-none border rounded w-full p-2" type="number" id="amount" name="amount" onChange={handleChange} required  value={formData.amount} />
                            </div>
                            <button className="bg-slate-700 hover:bg-slate-900 transition text-white py-2 px-4 rounded my-3" type="submit">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditForm
