

function change_color_of_text() {
    var border_red = document.getElementById("border_red").value;
    var border_green = document.getElementById("border_green").value;
    var border_blue = document.getElementById("border_blue").value;
    var border_width = document.getElementById("border_width").value;

    var background_red = document.getElementById("background_red").value;
    var background_green = document.getElementById("background_green").value;
    var background_blue = document.getElementById("background_blue").value;

    var tag = document.getElementById("alteration");
    tag.style.borderColor = `rgb(${border_red},${border_green},${border_blue})`;
    tag.style.borderWidth = `${border_width}px`
    tag.style.backgroundColor = `rgb(${background_red},${background_green},${background_blue})`;
}
