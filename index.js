const button = document.getElementById("btn");

const endpoint1 = "https://dummyjson.com/posts";
const endpoint2 = 'https://dummyjson.com/products';
const endpoint3 = 'https://dummyjson.com/todos';

button.addEventListener("click", async () => {
    try {
        await PromiseAPI1();
        await PromiseAPI2();
        await PromiseAPI3();
    } catch (error) {
        console.error(error);
    }
});

function PromiseAPI1() {
    return new Promise(resolve => {
        setTimeout(async () => {
            const response = await fetch(endpoint1);
            const data = await response.json();
            const table1 = document.querySelector('.table-body-1');
            const thead = document.createElement('tr');
            thead.innerHTML = `
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>UserId</th>
            <th>Tags</th>
            <th>Reactions</th> `
            table1.appendChild(thead);

            console.log(data.posts);
            data.posts.forEach(item => {

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.body}</td>
                    <td>${item.userId}</td>
                    <td>${item.tags}</td>
                    <td>${item.reactions}</td>
                    `;
                table1.appendChild(row);
            });
            resolve(true);
        }, 1000);
    });
}

function PromiseAPI2() {
    return new Promise(resolve => {
        setTimeout(async () => {
            const response = await fetch(endpoint2);
            const data = await response.json();
            const table2 = document.querySelector('.table-body-2');
            const thead = document.createElement('tr');
            thead.innerHTML = `
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>DiscountPercentage</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Thumbnail</th> `
            table2.appendChild(thead);
            console.log(data.products)
            data.products.forEach(item => {

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>${item.discountPercentage}</td>
                    <td>${item.rating}</td>
                    <td>${item.stock}</td>
                    <td>${item.brand}</td>
                    <td>${item.category}</td>
                    <td><img src="${item.thumbnail}" alt="thumbnail" class="thumbnail" ></td>
                    `;
                table2.appendChild(row);
            });
            resolve(true);
        }, 2000);
    });
}

function PromiseAPI3() {
    return new Promise(resolve => {
        setTimeout(async () => {
            const response = await fetch(endpoint3);
            const data = await response.json();
            console.log(data)
            const table3 = document.querySelector('.table-body-3');
            const thead = document.createElement('tr');
            thead.innerHTML = `
            <th>Id</th>
            <th>Todo</th>
            <th>Completed</th>
            <th>UserId</th>`
            table3.appendChild(thead);

            data.todos.forEach(item => {

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.todo}</td>
                    <td>${item.completed}</td>
                    <td>${item.userId}</td>
                    `;
                table3.appendChild(row);
            });
            resolve(true);
        }, 3000);
    });
}
