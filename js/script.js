
function myFunction() {
var x = document.getElementById("myColor").value;
$('#contrastFilter').css('background', x);
var d = document.getElementById("colorName").innerHTML = x;

$('#contrast').on('input', function() {
    $('#contrastFilter').css('opacity', $(this).val())
});
}


