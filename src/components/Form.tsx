import React, { useState } from "react";
import Calculator from './Calculator';
import Result from './Result';
import './index.css'

const Form: React.FC = () => {
    const [valor, setValor] = useState("");
    const [result, setResultado] = useState<number | null>(null);
    const calculator = new Calculator();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (/^\d*$/.test(value)) {
        setValor(value);
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const numero = parseInt(valor, 10);
      if (!isNaN(numero) && numero > 0) {
        setResultado(calculator.serie(numero));
      }
    };



    return (
        <div>
        <h1 className="textHeader">Calculador de Serie</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Ingresa un número entero positivo:
          <input
            type="text"
            value={valor}
            onChange={handleChange}
            className="input-number"
            onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Ingresa un número postivo")}
            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
            pattern="^[1-9]\d*$" 
            maxLength={"6"}
            required
          />
        </label>
        <button type="submit" className="btn-calc">Calcular</button>
        <Result result={result}/>
      </form>
      </div>
    );
};

export default Form;

