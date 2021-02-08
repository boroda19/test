export const Api = new class Api {
    getData = async () => {
        const response = await fetch(
            'http://localhost:8080/api/tasks',
            {
                method: 'GET',
            },
        );
        const result = await response.json();

        return result;
    }

    setData = async (data) => {
        const response = await fetch(
            'http://localhost:8080/api/tasks',
            {
                method:      'POST',
                mode:        'cors',
                cache:       'no-cache',
                credentials: 'omit',
                headers:     {
                    Accept:         'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            },
        );
        const result = await response.json();

        return result;
    }
    changeStatus = async (data) => {
        const response = await fetch(
            'http://localhost:8080/api/tasks',
            {
                method:      'PUT',
                mode:        'cors',
                cache:       'no-cache',
                credentials: 'omit',
                headers:     {
                    Accept:         'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            },
        );
        const result = await response.json();

        return result;
    }
    deleteItem = async (id) => {
        const response = await fetch(
            'http://localhost:8080/api/tasks/' + id,
            {
                method:      'DELETE',
            },
        );
        const result = await response.json();

        return result;
    }
}();