const fullName = document.querySelector("#name")
const todo = document.querySelector("#todo")
const btn = document.querySelector("#btn")
const baseURL = "http://localhost:3001/adress"
const listBlock = document.querySelector("#list")


btn.addEventListener("click", function () {
    if (!fullName.value=="" && !todo.value=="") {
        const data = {
            fullname: fullName.value,
            todo: todo.value
        }

        fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then((data)=> data.json())
        .then((data) => {
            listBlock.innerHTML += `
            <ul>
                <li>${data.fullname}</li>
                <li>${data.todo}</li>
            </ul>`
        })
        
    } else {
        return
    }
    
})
