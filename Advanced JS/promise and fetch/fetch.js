const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

getPost();



// fetch(url)
// ➡️ Promise<Response>
// status (200, 404…)
// headers
// body (ReadableStream ❗)