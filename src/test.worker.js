self.addEventListener("message", startCounter);

// function startCounter(event) {
//     let initial = event.data;
//     setInterval(() => this.postMessage(initial++), 1000);
// }

function startCounter(event) {
    let initial = event.data;
    let date = new Date();
    setInterval(() => {
        date.setTime(date.getTime() + 1000);
        const url = `https://jsonplaceholder.typicode.com/todos/${initial++}`
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.postMessage([json]);
            })
        
    }, 5000);
}