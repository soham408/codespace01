async function fetchData(){
    const res = await fetch ('https://api.github.com/users/soham408');
    const result = await res.json();
    console.log(result);
}

fetchData();