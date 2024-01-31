import Header from "@/components/header/Header";
import styles from "@/styles/blog.module.scss";

import { robotoFlex } from "@/fonts/font";

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/count/countSlice';
import { useState } from "react";

export default function Blog() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [numAdd, setNumAdd] = useState(0);
  
  
  function addGoGo(num){
    dispatch(incrementByAmount(num))
  }

  return (
    <div id={styles.pageBlog} className={robotoFlex.className}>
        <Header/>
        <div id={styles.boxInformation}>
            <h1 id={styles.waiting}>Aguarde... A pagina está sendo construída!</h1>

            <fieldset>
              <h1>Test Redux</h1>

              <h2>Valor do contador: {count}</h2>

              <button onClick={() => dispatch(increment())}>Adicionar +1</button>
              <button onClick={() => dispatch(decrement())}>Diminuir -1</button>

              <div>
                <input type="number" onChange={(e) => setNumAdd(e.target.value)} />
                <button onClick={() => addGoGo(Number(numAdd))}>Add By Amount</button>
              </div>

            </fieldset>
        </div>
    </div>
  )
}
