var exports = {};
var clear = document.querySelector("#clear");
var myDropzone = document.querySelector("#myDropzone");
var uploadButton = document.querySelector('#upload');
var template = document.querySelector('#template');
if (clear) {
    clear.addEventListener("click", function () {
        fetch("/Clear", {
            method: 'Post'
        }).then(function (response) {
            if (response.ok) {
                myDropzone.innerHTML = "";
            }
        }).catch(function (error) {
            alert('Failed to clear files.');
        });
    });
}
if (uploadButton) {
    uploadButton.addEventListener('click', function () {
        myDropzone.click();
    });
}
function checkisEmpty() {
    if (myDropzone.querySelector(".dz-preview")) {
        template.classList.add("_active");
    }
    else {
        template.classList.remove("_active");
    }
}
setInterval(checkisEmpty, 1000);


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXNCLENBQUM7QUFDcEUsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQW9CLENBQUM7QUFDNUUsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQXNCLENBQUM7QUFDNUUsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQWtCLENBQUM7QUFHdEUsSUFBSSxLQUFLLEVBQUU7SUFDUCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQzVCLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDWixNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNaLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtnQkFDYixVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUM3QjtRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDVixLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDO0NBQ047QUFHRCxJQUFJLFlBQVksRUFBRTtJQUNkLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDbkMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXZCLENBQUMsQ0FBQyxDQUFDO0NBQ047QUFFRCxTQUFTLFlBQVk7SUFFakIsSUFBSSxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ3pDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3JDO1NBQU07UUFDSCxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUV4QztBQUNMLENBQUM7QUFFRCxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXJcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IG15RHJvcHpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215RHJvcHpvbmVcIikgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG5jb25zdCB1cGxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBsb2FkJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBsYXRlJykgYXMgSFRNTEhSRWxlbWVudDtcclxuXHJcblxyXG5pZiAoY2xlYXIpIHtcclxuICAgIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZmV0Y2goXCIvQ2xlYXJcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQb3N0J1xyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIG15RHJvcHpvbmUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBjbGVhciBmaWxlcy4nKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5pZiAodXBsb2FkQnV0dG9uKSB7XHJcbiAgICB1cGxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbXlEcm9wem9uZS5jbGljaygpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja2lzRW1wdHkoKSB7XHJcblxyXG4gICAgaWYgKG15RHJvcHpvbmUucXVlcnlTZWxlY3RvcihcIi5kei1wcmV2aWV3XCIpKSB7XHJcbiAgICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuc2V0SW50ZXJ2YWwoY2hlY2tpc0VtcHR5LCAxMDAwKTsgLy8gY2hlY2sgZXZlcnkgMSBzZWNvbmQiXX0=
