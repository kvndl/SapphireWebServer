// STOP LOOKING AT MY TOOLS

function chc() {
    var body = document.getElementById('Site');
    var finger = document.getElementById('finger');
    var nothing = document.getElementById('nothing');
    var didit = document.getElementById('didit');
    var naturalCauses = document.getElementById('naturalCauses');
    var poorGuy = document.getElementById('poorGuy')

    finger.setAttribute('style', 'display: none !important');
    didit.setAttribute('style', 'display: none !important');
    naturalCauses.setAttribute('style', 'display: none !important');
    poorGuy.setAttribute('style', 'display: none !important');

    body.setAttribute('style', 'background-color: #ffffff !important');
    // nothing.setAttribute('style', 'display: block !important');

    nothing.setAttribute('style', 'color: #222424 !important');
    nothing.setAttribute('style', 'display: block !important')
}

function ha() {
    var ha = document.getElementById('ha');
    ha.innerHTML = 'ha, what a nerd using your cursor';
}

function send() {
    var form = document.getElementById('contact-form');
    form.submit();
}