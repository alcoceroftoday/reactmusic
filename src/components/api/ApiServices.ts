import { http } from "../../config/http";
import axios from "axios";

export default class ApiServices{
    public getArtists():Promise<IArtists[]>{
        return http.get('/api/artists')
        .then(res => res.data);
    }
    public getArtist(id:string):Promise<IArtists[]>{
        return http.get("/api/artists/"+id).then(res => res.data.albums);
    }
    public getAlbums():Promise<IAlbums[]>{
        return http.get("/api/albums").then(res=>res.data);
    }
    public getAlbum(id:string):Promise<IAlbums[]>{
        return http.get("/api/albums/"+id).then(res=>res.data.tracks);
    }
    public getSongs():Promise<ISongs[]>{
        return http.get("/api/tracks").then(res=>res.data);
    }
}
interface IArtists {
    id:string;
    name:string;
    artwork:string;
}
interface IAlbums {
    id:string;
    name:string;
    artwork:string;
}
interface ISongs {
    id: number;
    name: string;
    duration: number;
    track: number;
    url: string;
}