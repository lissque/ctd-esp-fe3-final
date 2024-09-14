import Card from '../Components/Card'
import ReducerCount from "../Components/ReducerCount"
import { useDentistStates } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useDentistStates();

  return (
    <main >
      <h1>Home</h1>
      <div className='card-grid'>
        { state.dentist.map((dentistObject) => (
          <Card key={dentistObject.id} name={dentistObject.name}
           username={dentistObject.username} id={dentistObject.id}
           dentistObject={dentistObject}>
          </Card>
        ))}
      </div>
      <ReducerCount/>
    </main>
  )
}

export default Home