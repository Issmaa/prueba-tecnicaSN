import React from "react"

interface PropsResult {
    result: number | null;
}

const Result: React.FC<PropsResult> = ({result}) =>{
    
    return (
        <div>
        {result !== null && (
            <div className="mt-4">
                <strong>Resultado:</strong> {result}
            </div>
        )}
        </div>
    )
}

export default Result;