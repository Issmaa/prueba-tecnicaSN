import React, { useState } from "react";
import Calculator from './Calculator';
import Result from './Result';

const Form: React.FC = () => {

    const [input, setInput] = useState<number>(1);
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        const calculator = new Calculator();
        const output = calculator.serie(input);
        setResult(output);
    };



    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Calculadora de Serie</h1>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
                className="border rounded p-2 mr-2"
                min="1"
            />
            <button
                onClick={handleCalculate}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Calcular
            </button>
            <Result result={result}/>
        </div>
    );
};

export default Form;

