
class Calculator {
    serieTriangular(num: number): number {
        return (num * (num + 1)) / 2;
    }

    seriePrimo(num: number): number { 
        if(num <= 0 ) return 0;
        if(num === 1 ) return 2;
        const esPrimo = (n: number): boolean => {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        };

        let contador = 0;
        let candidato = 2;
        while (true) {
            if (esPrimo(candidato)) {
                contador++;
                if (contador === num) {
                    return candidato;
                }
            }
            candidato++;
        }
    }

    serieFibonacci(num: number): number {
        if(num <= 0) return 0
        if(num === 1) return 1
    
        let x = 0; 
        let y = 1; 
        for(let i = 2; i <= num; i++){
            let suma = x + y; 
            x = y; 
            y = suma; 
        }
    
        return y; 
    }

    serie(n: number): number {
        /** Calcula el término n de la serie según la fórmula dada. */
        if (n < 1) {
            throw new Error("n debe ser un número positivo.");
        }

        const triangularTerm = this.serieTriangular(n + 2);
        const primoTerm = this.seriePrimo(n - 1);
        const fibonacciTerm = this.serieFibonacci(n);

        console.log('>> triangularTerm', triangularTerm)
        console.log('>> primoTerm', primoTerm)
        console.log('>> fibonacciTerm', fibonacciTerm)
        return 2 * triangularTerm - 3 * primoTerm - 7 * fibonacciTerm;
    }
}

export default Calculator