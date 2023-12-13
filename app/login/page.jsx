import AuthForm from '@/app/components/AuthForm';
// import '@/app/globals.css';

const Login = () => {
    return (
        <main className="min-h-screen bg-gray-900 text-gray-300">
            <div className="container mx-auto p-6 sm:p-12">
                <h1 className="text-4xl mb-6">Welcome to Expense Tracker</h1>
                <p className="text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta voluptates mollitia, quo qui perspiciatis, itaque, fugiat recusan.</p>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <AuthForm />
                </div>
            </div>
        </main>
    )
}

export default Login
