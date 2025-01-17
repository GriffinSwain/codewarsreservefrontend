// Code Wars API Fetches

async function GetCodeWarsUserData(username: string) {
    const result = await fetch(`https://www.codewars.com/api/v1/users/${username}`);
    let data = await result.json();
    return data;
}

async function GetCodeWarsCompletedKatas(username: string) {
    const result = await fetch(`https://www.codewars.com/api/v1/users/${username}/code-challenges/completed`);
    let data = await result.json();
    return data;
}

async function GetCodeWarsAuthoredKatas(username: string) {
    const result = await fetch(`https://www.codewars.com/api/v1/users/${username}/code-challenges/authored`);
    let data = await result.json();
    return data;
}

async function GetCodeWarsKata(input: string) {
    const result = await fetch(`https://www.codewars.com/api/v1/code-challenges/${input}`);
    let data = await result.json();
    return data;
}

// Backend API Fetches

async function CreateAccountPost(createdUser: object) {
    const result = await fetch('https://codewarsbackend.azurewebsites.net/User/AddUser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });
    if (!result.ok) {
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    } else {
    }
    let data = await result.json();
    console.log(data);
    return data;
}

async function LoginPost(loginUser: object) {
    const result = await fetch('https://codewarsbackend.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });
    if (!result.ok) {
        alert('Could Not Log In')
        const message = `An Error has Occured ${result.status}`;
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
    return data;
}

export { GetCodeWarsUserData, GetCodeWarsCompletedKatas, GetCodeWarsAuthoredKatas, GetCodeWarsKata, CreateAccountPost, LoginPost }