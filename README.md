# project file

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
    <style>
     html {
  margin: 0;
}

span {
  display: black;
}
.canvas {
  margin: 100px auto 100px;
  width: 70%;
  text-align: center;
}

.button {
  width: 90px;
  height: 80px;
  border: solid black 3px;
  display: inline-block;
}

#orange {
  background: orange;
}

#white {
  background: white;
  
}
#green {
  background: green;
}
#yellow {
  background: yellow;
}
#red {
  background: red;
}
#black {
  background: black;
}

    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@sohambambade6771"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="orange"></span>
      <span class="button" id="white"></span>
      <span class="button" id="green"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="red"></span>
      <span class="button" id="black"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script>
       const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
button.addEventListener('click', function(e){
  if (e.target.id === 'orange'){
    body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === 'white'){
    body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === 'green'){
    body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === 'yellow'){
    body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === 'red'){
    body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === 'black'){
    body.style.backgroundColor = e.target.id;
  }
});
});
</script>
  </body>
</html>
