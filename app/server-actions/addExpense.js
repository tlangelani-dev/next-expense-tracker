'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function addExpense(formData) {
    const title = formData.get('title');
    const type = formData.get('type');
    const amount = formData.get('amount');

    const cookieStore = cookies();
    const supabase = createServerComponentClient({
        cookies: () => cookieStore
    });
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;

    if (!user) {
        console.error('User is not authenticated within addExpense server action');
        return;
    }

    const { data, error } = await supabase
        .from('expenses')
        .insert({
            title,
            type,
            amount,
            user_id: user.id
        });

    if (error) {
        console.error('There was a problem inserting data', error);
        return;
    }

    revalidatePath('/');

    return {
        message: 'Success',
    };
}

// id serial primary key,
//   user_id uuid references auth.users not null,
//   title varchar(255) not null,
//   type varchar(64) not null,
//   amount decimal(9, 2) not null,
//   created_at timestamp with time zone default now(),
//   updated_at timestamp with time zone
