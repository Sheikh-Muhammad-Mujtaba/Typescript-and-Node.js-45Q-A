// Function to create an album object
function make_album(artistName, albumTitle, numTracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
    };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}
// Create albums
var album1 = make_album('Artist One', 'Album One');
var album2 = make_album('Artist Two', 'Album Two', 12);
var album3 = make_album('Artist Three', 'Album Three', 8);
// Print album information
console.log(album1);
console.log(album2);
console.log(album3);
