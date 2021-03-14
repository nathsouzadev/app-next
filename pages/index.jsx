import { useState } from 'react';

const Home = () => {
    return(
        <div>
            <h1>Hello world</h1>
            <Counter />
            <a href="/about">Sobre</a>
        </div>
    )
}

const Counter = () =>{
    const [count, setCount] = useState(0);

    function add(){
        setCount(count+1)
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={add}>Adicionar</button>
        </div>
    )


}

export default Home;
