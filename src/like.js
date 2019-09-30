"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(numberOfLikes) {
        this.numberOfLikes = numberOfLikes;
        this.numberOfLikes = numberOfLikes == null ? 0 : numberOfLikes;
        this.selected = false;
    }
    Like.prototype.like = function () {
        this.selected ? --this.numberOfLikes : ++this.numberOfLikes;
        this.selected = !this.selected;
        console.log("Is liked: " + this.selected + ", number of likes: " + this.numberOfLikes);
    };
    return Like;
}());
exports.Like = Like;
