const postData = async (url, data) => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await result.json();
}

export {postData};

//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0J79g66iRBH9f7dnmd514kM5ojpOsNK8;