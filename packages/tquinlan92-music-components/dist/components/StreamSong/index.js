"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var StreamSong = (function (_super) {
    __extends(StreamSong, _super);
    function StreamSong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamSong.prototype.componentDidMount = function () {
        console.log('the component mounted motherfucka');
    };
    StreamSong.prototype.render = function () {
        return (React.createElement("audio", { controls: true },
            React.createElement("source", { src: "http://d2m83kxg25z4qj.cloudfront.net/Q.+-+Given+All+My+Love.mp3", type: "audio/mpeg" })));
    };
    return StreamSong;
}(React.Component));
exports.default = StreamSong;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL1N0cmVhbVNvbmcvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUUvQjtJQUF3Qyw4QkFBZTtJQUF2RDs7SUFhQSxDQUFDO0lBWEcsc0NBQWlCLEdBQWpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUNILCtCQUFPLFFBQVE7WUFDWCxnQ0FBUSxHQUFHLEVBQUMsaUVBQWlFLEVBQUMsSUFBSSxFQUFDLFlBQVksR0FBRyxDQUM5RixDQUNYLENBQUM7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWJBLEFBYUMsQ0FidUMsS0FBSyxDQUFDLFNBQVMsR0FhdEQiLCJmaWxlIjoiY29tcG9uZW50cy9TdHJlYW1Tb25nL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmVhbVNvbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGUgY29tcG9uZW50IG1vdW50ZWQgbW90aGVyZnVja2EnKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YXVkaW8gY29udHJvbHM+XG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vZDJtODNreGcyNXo0cWouY2xvdWRmcm9udC5uZXQvUS4rLStHaXZlbitBbGwrTXkrTG92ZS5tcDNcIiB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XG4gICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==
