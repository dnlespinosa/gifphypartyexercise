const btn = document.getElementById('button1');
const input = document.getElementById('input1');
const remove = document.getElementById('remove');
const div = document.getElementById('div1');

async function getGif(search) {
    const rndInt = Math.floor(Math.random() * 50) + 1
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const img = document.createElement('img');
    img.src= res.data.data[rndInt].url
    div.append(img);
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    getGif(input.value);
    input.value='';
});

remove.addEventListener('click', function(e){
    e.preventDefault();
    div.remove(div.children);
})
