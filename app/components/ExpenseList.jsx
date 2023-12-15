import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

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
                </section>
            ))}
        </div>
    )
}

export default ExpenseList


