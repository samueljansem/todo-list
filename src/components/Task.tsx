import { Checkbox } from './Checkbox';
import { clsx } from 'clsx';
import { Trash } from 'phosphor-react';
import { TaskProps } from '../@types/Task';
import { useTasks } from '../hooks/useTask';

export function Task({ task }: TaskProps) {
    const { toggleDone, deleteTask } = useTasks();

    function handleToggleDone() {
        toggleDone(task.id);
    }

    function handleDelete() {
        deleteTask(task.id);
    }

    return (
        <section className="px-4 py-4 flex gap-3 bg-gray-500 rounded-lg ring-1 ring-gray-400 align-top items-start">
            <Checkbox
                checked={task.done}
                defaultChecked={task.done}
                onClick={handleToggleDone}
            />
            <span
                className={clsx('text-gray-100 text-sm w-full', {
                    'line-through text-gray-300': task.done,
                })}
            >
                {task.text}
            </span>
            <button
                type="button"
                className="text-gray-300 p-1 rounded hover:bg-gray-400 hover:text-danger"
            >
                <Trash weight="bold" onClick={handleDelete} />
            </button>
        </section>
    );
}
