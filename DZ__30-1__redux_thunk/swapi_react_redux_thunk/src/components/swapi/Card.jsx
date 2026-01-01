import { useSelector } from "react-redux"

function Card() {
    const { swapi} = useSelector((state) => state.swapi);
    return (
        <>
            {swapi && (
                <div className="card mt-4">
                    <div className="card-header fw-bold">
                        Результат
                    </div>
                    <div className="card-body">
                        <pre className="mb-0">
                            {JSON.stringify(swapi, null, 2)}
                        </pre>
                    </div>
                </div>
            )}

        </>
    )
}

export default Card
