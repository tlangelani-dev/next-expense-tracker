import CreateForm from '@/app/components/CreateForm';
import ExpenseList from '@/app/components/ExpenseList';

const Home = () => {
    return (
        <div className="min-h-screen">
            <header className="bg-slate-800 text-white">
                <div className="container mx-auto p-6 flex justify-between">
                    <h1 className="font-bold">Expenses</h1>
                    <form action="/auth/logout" method="POST">
                        <button className="bg-gray-600 hover:bg-gray-700 transition duration-300 text-white rounded text-sm py-2 px-4" type="submit">Logout</button>
                    </form>
                </div>
            </header>
            
            <CreateForm />
            <ExpenseList />
        </div>
    )
}

export default Home
