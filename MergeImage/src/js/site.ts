const clear = document.querySelector("#clear") as HTMLButtonElement;
const myDropzone = document.querySelector("#myDropzone") as HTMLFormElement;
const uploadButton = document.querySelector('#upload') as HTMLButtonElement;
const template = document.querySelector('#template') as HTMLHRElement;


if (clear) {
    clear.addEventListener("click", function () {
        fetch("/Clear", {
            method: 'Post'
        }).then(response => {
            if (response.ok) {
                myDropzone.innerHTML = "";
            }
        }).catch(error => {
            alert('Failed to clear files.');
        })
    });
}


if (uploadButton) {
    uploadButton.addEventListener('click', () => {
        myDropzone.click();

    });
}

function checkisEmpty() {

    if (myDropzone.querySelector(".dz-preview")) {
        template.classList.add("_active");
    } else {
        template.classList.remove("_active");

    }
}

setInterval(checkisEmpty, 1000); // check every 1 second