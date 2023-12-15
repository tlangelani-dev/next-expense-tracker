'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function deleteExpense(formData) {
    const id = formData.get('id');

    const cookieStore = cookies();
    const supabase = createServerComponentClient({
        cookies: () => cookieStore
    });
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;

    if (!user) {
        console.error('User is not authenticated within deleteExpense server action');
        return;
    }

    const { data, error } = await supabase
        .from('expenses')
        .delete()
        .match({
            id,
            user_id: user.id
        });

    if (error) {
        console.error('There was a problem deleting data', error);
        return;
    }

    revalidatePath('/');

    return {
        message: 'Success',
    };
}
