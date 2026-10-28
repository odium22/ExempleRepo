import { useState, useEffect } from "react";
import data from "./data.json";
import "./App.css";

export default function App() {
  const lessons = data.lessons;

  
  const [currentId, setCurrentId] = useState(lessons[0].id); 
  const [count, setCount] = useState(0); 
  const [text, setText] = useState("");

  const current = lessons.find((l) => l.id === currentId) || lessons[0];

 
  useEffect(() => {
    document.title = `${current.title} — React мини-урок`;
  }, [current.title]);

  useEffect(() => {
    console.log("Счётчик изменился:", count);
  }, [count]);



  const handleIncrement = () => setCount((c) => c + 1);
  const handleDecrement = () => setCount((c) => c - 1);
  const handleReset = () => setCount(0);
  const handleInputChange = (event) => setText(event.target.value);

  return (
    <div className="wrap">

      <section className="playground">
        <div className="demo-box">
          <h4>useState в деле</h4>
          <div className="count">{count}</div>
          <div className="btn-row">
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>−1</button>
            <button className="secondary" onClick={handleReset}>
              Сброс
            </button>
          </div>
          <p className="hint">
            Каждая кнопка вызывает setCount → React перерисовывает компонент.
            Открой консоль (F12): useEffect логирует каждое изменение count.
          </p>
        </div>

        <div className="demo-box">
          <h4>useState + handle</h4>
          <input value={text} onChange={handleInputChange} placeholder="Печатай сюда..." />
          <p>
            Введено: <strong>{text || "…"}</strong>
          </p>
          <p className="hint">
            input «контролируемый»: значение живёт в state, а onChange сразу
            обновляет его через handleInputChange.
          </p>
        </div>
      </section>
    </div>
  );
}
