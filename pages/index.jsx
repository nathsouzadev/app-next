import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
    return(
        <div>
            <h1>Hello world</h1>
            <Counter />
            <Link href="/about">
                <a>Sobre</a>
            </Link>
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
