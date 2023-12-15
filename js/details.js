
const id = new URLSearchParams(window.location.search).get('id');
const details = document.querySelector('.details');
const button = document.querySelector('.buttons');

const renderDetails = async() => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();
    console.log(post);
    const template = `
        <div class="posts">
            <h1>${post.title}<h1/>
            <p>${post.body}</p>
        </div>
    `;

    details.innerHTML = template;
}

button.addEventListener('click', async(e) => {
    const res = await fetch('http://localhost:3000/posts/' + id,{
        method: 'DELETE'
    })
    window.location.replace('/index.html');
})

window.addEventListener('DOMContentLoaded', () => renderDetails());