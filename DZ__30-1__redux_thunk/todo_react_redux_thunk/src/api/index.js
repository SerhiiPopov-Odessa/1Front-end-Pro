export async function fetchTodoAPI() {
    try {
        const res = await fetch("https://Jsonplaceholder.typicode.com/todos?_limit=10");
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

export async function deleteTodoAPI(id) {
    try {
        const res = await fetch(`https://Jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
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

export async function toggleTodoAPI(id, todo) {
    try {
        const res = await fetch(`https://Jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
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
        const res = await fetch(`https://Jsonplaceholder.typicode.com/todos`, {
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