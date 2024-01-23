let textBox = document.getElementById("textbox");
textBox.addEventListener('input', function(){
    let text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function (Elem) {
        return Elem != "";
    });
    
    document.getElementById("word").innerHTML = cleanList.length;
})