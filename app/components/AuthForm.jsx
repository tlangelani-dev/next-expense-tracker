'use client';

import { Auth } from '@supabase/auth-ui-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const AuthForm = () => {
    const supabase = createClientComponentClient();
    const appDomain = process.env.NEXT_PUBLIC_VERCEL_APP_DOMAIN;
    console.log('APP DOMAIN', appDomain);

    return (
        <Auth
            supabaseClient={supabase}
            view="magic_link"
            showLinks={false}
            providers={[]}
            redirectTo="https://next-expense-tracker-omega.vercel.app/auth/callback"
            appearance={{
                theme: 'dark',
                button: {
                    className: 'bg-white-400 text-gray-900 hover:bg-gray-600'
                },
                input: {
                    className: 'bg-gray-700 border-gray-600 text-white'
                }
            }}
        />
    )
}

export default AuthForm
