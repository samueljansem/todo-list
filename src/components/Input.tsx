import { FormEvent } from 'react';
import { PlusCircle } from 'phosphor-react';

export function Input() {
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full mt-[-27px] flex items-center gap-2"
        >
            <input
                type="text"
                placeholder="Create a new task"
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
