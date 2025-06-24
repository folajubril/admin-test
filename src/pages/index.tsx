import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (email.includes('@') && password.length > 6) {
            // ✅ Simulated login success
            localStorage.setItem('authToken', 'web-auth-token');
            router.push('/dashboard');
        } else {
            alert('Email and password required');
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='flex flex-col gap-4 w-[400px] p-6 border rounded-lg shadow-lg bg-white'>

           
            <h1 className="text-center font-semibold text-[18px]">Login</h1>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"  className='h-[48px] border border-gray-300 rounded-lg p-4 w-full' type="email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className='h-[48px] border border-gray-300 rounded-lg p-4 w-full'/>
            <button className="h-[48px] bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none hover:scale-105 transition-transform duration-200"
                onClick={handleLogin}>Login</button>
                 </div>
        </div>
    );
}
