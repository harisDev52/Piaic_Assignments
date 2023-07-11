
interface Album {
        artist: string,
        title: string,
        tracks?: null | number
}

function make_album(artist: string, title: string, tracks?: number): Album {
        const album: Album = {
                artist: artist,
                title: title
        };

        if (tracks) {
                album.tracks = tracks;
        }

        return album;
}

console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 12));
console.log(make_album("Artist 3", "Album 3", 8));