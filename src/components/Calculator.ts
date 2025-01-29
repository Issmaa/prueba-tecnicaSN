
class Calculator {
    serieTriangular(num: number): number {
        return (num * (num + 1)) / 2;
    }

    seriePrimo(num: number): number { 
        if(num <= 0 ) return 0;
        if(num === 1 ) return 2;
        const isPrimo = (n: number): boolean => {
            if (n < 2) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        };

        let counter = 0;
        let findPrimo = 2;
        while (true) {
            if (isPrimo(findPrimo)) {
                counter++;
                if (counter === num) {
                    return findPrimo;
                }
            }
            findPrimo++;
        }
    }

    serieFibonacci(num: number): number {
        if(num <= 0) return 0
        if(num === 1) return 1
    
        let x = 0; 
        let y = 1; 
        for(let i = 2; i <= num; i++){
            const sum = x + y; 
            x = y; 
            y = sum; 
        }
    
        return y; 
    }

    serie(num: number): number {
        if (num < 1) {
            throw new Error("n debe ser un número positivo.");
        }

        const triangularCalc = this.serieTriangular(num+ 2);
        const primoCalc = this.seriePrimo(num - 1);
        const fibonacciCalc = this.serieFibonacci(num);

        return (2 * triangularCalc) - (3 * primoCalc) - (7 * fibonacciCalc);
    }
}

export default Calculator