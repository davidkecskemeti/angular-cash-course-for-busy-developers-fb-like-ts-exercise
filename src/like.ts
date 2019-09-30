export class Like {

    private selected: boolean;

    constructor(private numberOfLikes?: number) {
        this.numberOfLikes = numberOfLikes == null ? 0 : numberOfLikes;
        this.selected = false;
    }

    like() {
        this.selected ? --this.numberOfLikes : ++this.numberOfLikes;
        this.selected = !this.selected;
        console.log("Is liked: " + this.selected + ", number of likes: " + this.numberOfLikes);
    }
}
