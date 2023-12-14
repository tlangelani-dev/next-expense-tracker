import CreateForm from '@/app/components/CreateForm';
import ExpenseList from '@/app/components/ExpenseList';

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto p-6">
                <h1>My Expenses</h1>
                <form action="/auth/logout" method="POST">
                    <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4" type="submit">Logout</button>
                </form>
            </div>
            <CreateForm />
            <ExpenseList />
        </div>
    )
}

export default Home
