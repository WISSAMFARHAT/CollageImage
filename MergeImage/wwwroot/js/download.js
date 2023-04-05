var exports = {};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function takeScreenshot(name) {
    return __awaiter(this, void 0, void 0, function () {
        var divElement;
        return __generator(this, function (_a) {
            divElement = document.getElementById('template');
            html2canvas(divElement).then(function (canvas) {
                var base64String = canvas.toDataURL();
                var link = document.createElement("a");
                link.href = base64String;
                link.download = name;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
            return [2];
        });
    });
}


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUd0QyxNQUFNLFVBQWdCLGNBQWMsQ0FBQyxJQUFZOzs7O1lBR3ZDLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXZELFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUMvQixJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXhDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQyxDQUFDLENBQUMsQ0FBQzs7OztDQUNOIiwiZmlsZSI6ImRvd25sb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gXCJodG1sMmNhbnZhc1wiO1xyXG5cclxuLy8gVGFrZSBhIHNjcmVlbnNob3Qgb2YgdGhlIGRpdiBlbGVtZW50XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0YWtlU2NyZWVuc2hvdChuYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAvLyBHZXQgdGhlIGRpdiBlbGVtZW50XHJcbiAgICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBsYXRlJyk7XHJcblxyXG4gICAgaHRtbDJjYW52YXMoZGl2RWxlbWVudCkudGhlbihjYW52YXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJhc2U2NFN0cmluZyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGJhc2U2NFN0cmluZzsgXHJcbiAgICAgICAgbGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbiJdfQ==
