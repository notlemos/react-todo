import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItem from "./task-item";
import UseTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";

export default function TasksList() {
    
    const { tasks } = UseTasks();
    const { prepareTask } = useTask();



    function handleNewTask() {
        prepareTask()
    }
    return( 
        <>
            <section>
                <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>
                    Nova Tarefa
                </Button>
            </section>
            <section className="space-y-2">
                {tasks.map((task) => <TaskItem key={task.id} task={task}/>) }

            </section>
        </>
    )
}