import { FormEvent, useRef } from 'react';
import { PlusCircle } from 'phosphor-react';
import { useTasks } from '../hooks/useTask';

export function Input() {
    const { createTask } = useTasks();
    const formRef = useRef<HTMLFormElement>(null);
    const textInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        createTask(textInputRef.current?.value || '');

        formRef.current?.reset();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full mt-[-27px] flex items-center gap-2"
            ref={formRef}
        >
            <input
                type="text"
                placeholder="Create a new task"
                ref={textInputRef}
                className="w-full rounded-lg bg-gray-500 px-4 py-4 text-gray-100 outline-none placeholder:text-gray-300 focus:ring-1 ring-purple-700"
            />
            <button
                type="submit"
                className="px-4 py-4 rounded-lg bg-blue-700 text-gray-100 font-bold flex items-center gap-2 hover:bg-blue-300"
            >
                Create
                <PlusCircle weight="bold" size={16} />
            </button>
        </form>
    );
}
