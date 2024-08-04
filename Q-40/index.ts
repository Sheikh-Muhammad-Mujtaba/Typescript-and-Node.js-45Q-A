// Define the interface for the album object
interface Album {
    artist: string;
    title: string;
    tracks?: number;  // Optional property
}

// Function to create an album object
function make_album(artistName: string, albumTitle: string, numTracks?: number): Album {
    const album: Album = {
        artist: artistName,
        title: albumTitle,
    };
    
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    
    return album;
}

// Create albums
const album1 = make_album('Artist One', 'Album One');
const album2 = make_album('Artist Two', 'Album Two', 12);
const album3 = make_album('Artist Three', 'Album Three', 8);

// Print album information
console.log(album1);
console.log(album2);
console.log(album3);