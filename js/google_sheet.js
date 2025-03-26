const scriptURL ="https://script.google.com/macros/s/AKfycbyhZvt5TKBRt_0_FW1ov2RJ64bcL8TmtGwNlsi-J7lHqYyVCy-6QhdmqEVli2f5Yv279g/exec"
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => alert("Gracias, el formulario fue enviado con éxito" ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))       
})
