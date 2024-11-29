import Link from 'next/link';

export default function Header () {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">StackVarsity</h1>
            <nav>
                <Link href="/auth/login" className="mr-4">Login</Link>
                <Link href="/auth/signup">Signup</Link>
            </nav>
            </div>
        </header>
    );
 }