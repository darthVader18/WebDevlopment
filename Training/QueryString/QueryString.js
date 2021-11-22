var up = document.getElementById('GFG_UP');
        var url = 'https://www.youtube.com/watch?v=da9gTKWIivA';
        up.innerHTML = "URL = " + url;
        var down = document.getElementById('GFG_DOWN');
  
        function GFG_Fun() {
            down.innerHTML = "ID = " 
            + url.split("v=")[1].substring(0, 11);
        }

