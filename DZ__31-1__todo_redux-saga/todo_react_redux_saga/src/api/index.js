export async function fetchTodoAPI(signal) {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {signal});
        console.log("fetch res : ", res);
        if (!res.ok) {
            throw new Error('ServerError!');
        }
        return await res.json();
    }
    catch (error) {
        throw error;
    }
};

export async function deleteTodoAPI(id, signal) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
            signal,
        });
        console.log("delete res : ", res);
        if (!res.ok) {
            throw new Error('Not delete! ServerError!');
        }
        return await res.json();
    }
    catch (error) {
        throw error;
    }
};

export async function toggleTodoAPI(id, todo, signal) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            signal,
            body: JSON.stringify({
                completed: !todo.completed ,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        console.log("toggle res : ", res);
        if (!res.ok) {
            throw new Error('Not toggle! ServerError!');
        }
        return await res.json();
    }
    catch (error) {
        throw error;
    }
};

export async function addTodoAPI(todo) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        console.log("add res : ", res);
        if (!res.ok) {
            throw new Error('Not toggle! ServerError!');
        }
        return await res.json();
    }
    catch (error) {
        throw error;
    }
};

export async function updateTodoAPI( todo) {
    try {
        const { id, title } = todo;
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: title ,
            })
            // можна body: JSON.stringify({ title })
            ,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        console.log(" update res : ", res);
        if (!res.ok) {
            throw new Error('Not update! ServerError!');
        }
        return await res.json();
    }
    catch (error) {
        throw error;
    }
};