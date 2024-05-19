import RegisterForm from '@/components/RegisterForm';
import LoginForm from '@/components/LoginForm';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 relative py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="item-center z-10 max-w-md w-full space-y-8 bg-white bg-opacity-90 p-10 rounded-lg shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register a new account
        </h2>
        <RegisterForm />
        <h2>
          Login
        </h2>
        <LoginForm/>
      </div>
    </div>
  );
}
