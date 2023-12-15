import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { deleteExpense } from '@/app/server-actions/deleteExpense';
import EditForm from './EditForm';

const ExpenseList = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
        cookies: () => cookieStore
    });
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;

    const { data: expenses, error } = await supabase
        .from('expenses')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true });
    
    if (error) {
        console.error('There was a problem fetching expenses');
    }

    return (
        <div className="container mx-auto p-6">
            {expenses && expenses.map(expense => (
                <section className="bg-gray-200 py-2 px-3 rounded mb-3" key={expense.id}>
                    <h6 className="font-bold">{ expense.title }</h6>
                    <p>{ expense.type } - R{ expense.amount }</p>
                    <div className="flex space-x-2">
                        <form action={deleteExpense}>
                            <input type="hidden" name="id" value={ expense.id } />
                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 my-1 rounded"
                            >
                                Delete
                            </button>
                        </form>
                        <EditForm expense={expense} />
                    </div>
                </section>
            ))}
        </div>
    )
}

export default ExpenseList


