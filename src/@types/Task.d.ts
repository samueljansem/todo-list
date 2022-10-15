import { ReactNode } from 'react';

export interface ITask {
    id: string;
    text: string;
    done: boolean;
}

export interface TaskProps {
    task: ITask;
}

export interface TaskProviderProps {
    children: ReactNode;
}

export interface TaskContextData {
    tasks: ITask[];
    createTask: (taskInput: TaskInput) => void;
    deleteTask: (id: string) => void;
    toggleDone: (id: string) => void;
}
