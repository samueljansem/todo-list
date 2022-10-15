import { Checkbox } from './components/Checkbox';
import { Header } from './components/Header';
import { Input } from './components/Input';
import './styles/global.css';

export function App() {
    return (
        <div className="w-screen h-screen bg-gray-600">
            <Header />
            <main className="w-[736px] mx-auto">
                <Input />
            </main>
        </div>
    );
}
