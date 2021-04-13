function cinfo(country) {
  console.log(country);

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/html');
  xobj.open('GET', 'countries/' + country + '.html', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      let ob = xobj.responseText;

      document.getElementById('title').innerHTML = capitalize(country);
      document.getElementById('content').innerHTML = ob;

      document.getElementById('id01').style.display = 'block';
    }
  };
  xobj.send(null);
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
