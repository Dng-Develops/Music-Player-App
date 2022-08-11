class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("One", "Metallica", "1.jpeg", "1.mp3"),
  new Music("Master of Puppets", "Metallica", "2.jpg", "2.mp3"),
  new Music("Nothing Else Matters", "Metallica", "3.jpg", "3.mp3"),
];
