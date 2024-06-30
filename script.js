function passwordGenerator(length) {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = '';
    for (var i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

document.getElementById("generate").addEventListener("click", function () {
    var length = document.getElementById('length').value;
    if (length < 4) {
        alert('Password length should be at least 4');
        return;
    } else {
        let pass = passwordGenerator(length);
        const input = document.querySelector("#output");
        // input.style.padding = "5px";
        // input.style.width = "300px";
        // input.style.textAlign = "center";
        // input.type = "text";
        input.value = pass;
        document.querySelector(".password-container").appendChild(input);
    }
});
