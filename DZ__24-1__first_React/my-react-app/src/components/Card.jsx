import { useState } from 'react'

function Card() {
    return (
        <>

            <div className="card">
                <div className="card-body">
                    <span className="badge d-none bg-secondary">people</span>
                    <span className="badge d-none bg-secondary">1</span>
                    <div className="load d-none ">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <pre className="mt-2 mb-0"></pre>
                </div>
            </div>

        </>
    )
}

export default Card
