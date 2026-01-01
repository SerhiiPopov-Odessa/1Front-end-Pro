import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchSwapiThunk } from "../../store/thunks/index"
import { deleteSwapi } from "../../store/rooteReducer.mjs"

const endpoints = [
    { value: "films", label: "Фильмы" },
    { value: "people", label: "Персонажи" },
    { value: "planets", label: "Планеты" },
    { value: "species", label: "Виды" },
    { value: "vehicles", label: "Транспорт" },
    { value: "starships", label: "Звёздные корабли" }
];

function Form() {
    const dispatch = useDispatch();
    const [endpoint, setEndpoint] = useState("");
    const { swapi, isLoading, error } = useSelector((state) => state.swapi);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!endpoint) return;
        dispatch(fetchSwapiThunk(endpoint));
    };

    return (
        <>
            <form className="input-group mb-3" onSubmit={handleSubmit}>
                <span className="input-group-text" id="basic-addon3">https://swapi.info/api/</span>
                <select
                    className="form-select"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    required
                >
                    <option value="">-- Выберите --</option>
                    {endpoints.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
                {swapi && <button className="btn btn-outline-secondary" id="button-addon2" onClick={e => { e.stopPropagation(); dispatch(deleteSwapi()); }}  >
                    DELETE
                </button>}
                <button className="btn btn-outline-secondary" id="button-addon2" type="submit" disabled={isLoading}>
                    {isLoading ? "loading..." : "Get info"}
                </button>
            </form>

            {isLoading && (
                <div className="text-center my-4">
                    <div className="spinner-border text-primary" />
                </div>
            )}

            {error && (
                <div className="alert alert-danger mt-4">
                    {error}
                </div>
            )}

            
        </>
    )
}

export default Form
