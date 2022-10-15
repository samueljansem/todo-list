import { Checkbox } from './components/Checkbox';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Task, TaskProps } from './components/Task';
import './styles/global.css';

export function App() {
    const tasks: Array<TaskProps> = [
        {
            text: 'Teste',
            done: false,
        },
        {
            text: 'Teste 2',
            done: true,
        },
    ];

    const taskCount = tasks.length;
    const doneCount = tasks.filter((t) => t.done === true).length;

    return (
        <div className="w-screen h-screen bg-gray-600">
            <Header />
            <main className="w-[736px] mx-auto">
                <Input />
                <section className="flex flex-col gap-3 mt-16">
                    <header className="w-full flex justify-between mb-6">
                        <div className="flex gap-2 items-center">
                            <span className="font-bold text-blue-300">
                                Created tasks
                            </span>
                            <span className="px-2 py-0.5 text-xs rounded-r-full rounded-l-full text-gray-100 font-bold bg-gray-400">
                                {taskCount}
                            </span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="font-bold text-purple-300">
                                Done
                            </span>
                            <span className="px-2 py-0.5 text-xs rounded-r-full rounded-l-full text-gray-100 font-bold bg-gray-400">{`${doneCount} of ${taskCount}`}</span>
                        </div>
                    </header>
                    {tasks.map((task) => (
                        <Task
                            text={task.text}
                            done={task.done}
                            key={task.text}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}
