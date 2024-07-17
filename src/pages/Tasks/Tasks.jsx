import './Tasks.css'
import Task from '../../components/Task/Task'
import { useSelector } from 'react-redux'

function Tasks() {

    const tasksList = useSelector((state) => state.tasks.tasks)

    return (
        <main className="tasks">
            <header className="header">
                <h2 className="header_txt">Tasks List</h2>
            </header>
            <hr />
            <div className="tasks_list">
                 { tasksList.map(x => <Task name={x.name} img={x.img} price={x.price} />) }
            </div>
        </main>
    )
}

export default Tasks