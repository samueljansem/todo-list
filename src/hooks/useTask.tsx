import { createContext, useContext, useState } from 'react';
import { TaskContextData, TaskProviderProps, ITask } from '../@types/Task';
import { v4 as uuidv4 } from 'uuid';

const TasksContext = createContext<TaskContextData>({} as TaskContextData);

export function TasksProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<ITask[]>([]);

    function createTask(text: string) {
        const task: ITask = {
            id: uuidv4(),
            text: text,
            done: false,
        };

        setTasks([task, ...tasks]);
    }

    function deleteTask(id: string) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function toggleDone(id: string) {
        const newState = tasks.map((task) => {
            if (task.id === id) return { ...task, done: !task.done };

            return task;
        });

        setTasks(newState);
    }

    return (
        <TasksContext.Provider
            value={{ tasks, createTask, deleteTask, toggleDone }}
        >
            {children}
        </TasksContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TasksContext);

    return context;
}
