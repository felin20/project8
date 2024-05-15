"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var upload_photo_here_png_1 = require("../assets/upload-photo-here.png");
var uploading_gif_1 = require("../assets/uploading.gif");
var ImageContext_1 = require("./ImageContext");
var UploadImage = function () {
    var setImage = (0, ImageContext_1.useImageContext)().setImage;
    var _a = (0, react_1.useState)(upload_photo_here_png_1.default), avatarURL = _a[0], setAvatarURL = _a[1];
    var fileUploadRef = (0, react_1.useRef)(null);
    var handleImageUpload = function (event) {
        event.preventDefault();
        if (fileUploadRef.current) {
            fileUploadRef.current.click();
        }
    };
    var uploadImageDisplay = function () { return __awaiter(void 0, void 0, void 0, function () {
        var uploadedFile, formData, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!fileUploadRef.current || !fileUploadRef.current.files)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    setAvatarURL(uploading_gif_1.default);
                    uploadedFile = fileUploadRef.current.files[0];
                    formData = new FormData();
                    formData.append("file", uploadedFile);
                    return [4 /*yield*/, fetch("https://api.escuelajs.co/api/v1/files/upload", {
                            method: "post",
                            body: formData
                        })];
                case 2:
                    response = _a.sent();
                    if (!(response.status === 201)) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    setAvatarURL(data === null || data === void 0 ? void 0 : data.location);
                    setImage(data === null || data === void 0 ? void 0 : data.location); // Set image in context
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error(error_1);
                    setAvatarURL(upload_photo_here_png_1.default);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (<div className="relative h-96 w-96 m-8">
      <img style={{ width: '200px', height: '200px' }} src={avatarURL} alt="Avatar" className="h-96 w-96 rounded-full"/>

      <form id="form" encType='multipart/form-data'>
        <button type='button' onClick={handleImageUpload} className='flex-center absolute bottom-12 right-14 h-9 w-9 rounded-full'> <p>Upload Image</p>
        </button>
        <input type="file" id="file" ref={fileUploadRef} onChange={uploadImageDisplay} hidden/>
      </form>  
    </div>);
};
exports.default = UploadImage;
