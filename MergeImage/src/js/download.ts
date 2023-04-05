import html2canvas from "html2canvas";

// Take a screenshot of the div element
export async function takeScreenshot(name: string) {

    // Get the div element
    const divElement = document.getElementById('template');

    html2canvas(divElement).then(canvas => {
        const base64String = canvas.toDataURL();

        const link = document.createElement("a");
        link.href = base64String; 
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    });
}


