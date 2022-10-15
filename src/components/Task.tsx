import { Checkbox } from './Checkbox';
import { clsx } from 'clsx';

export interface TaskProps {
    text: string;
    done: boolean;
}

export function Task({ text, done }: TaskProps) {
    return (
        <section className="px-4 py-4 flex gap-3 bg-gray-500 rounded-lg ring-1 ring-gray-400">
            <Checkbox checked={done} defaultChecked={done} />
            <span
                className={clsx('text-gray-100 text-sm', {
                    'line-through text-gray-300': done,
                })}
            >
                {text}
            </span>
        </section>
    );
}
