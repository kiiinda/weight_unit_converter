document.getElementById('output').style.visibility = 'hidden';
document.getElementById('kgsInput').addEventListener('input', function(e){

    document.getElementById('output').style.visibility = 'visible';

    let kg = e.target.value;

    document.getElementById('gramsoutput').innerHTML =kg * 1000;
    document.getElementById('poundsoutput').innerHTML =kg * 2.2046;
    document.getElementById('ounceoutput').innerHTML =kg* 35.274;
})
