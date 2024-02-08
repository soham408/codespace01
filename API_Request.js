const requestUrl = 'https://api.github.com/users/soham408'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState ===4){
        const data = JSON.parse(this.responseText)
        console.log(data)
        console.log([data.name]);
    }
}
xhr.send();

const button = document.querySelector('button');
button.addEventListener('click', function(e){
        const url = "https://avatars.githubusercontent.com/u/141113437?v=4"
        const img = document.createElement('img')
        img.src = button;
        document.body.appendChild(img)
})