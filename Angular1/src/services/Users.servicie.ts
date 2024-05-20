import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs";
import { uriss } from "./uris";

@Injectable({
    providedIn: 'root'
})
export class usersServicie {
    constructor(private http: HttpClient){}
    createRandomuser(obj:any){
        return this.http.post(`${uriss.USERS}`, obj).pipe(
            catchError((err:any) =>{
                return err;
            }),
            map ((resp: any)=>{
                return resp;
            })
        )
    }
    deleteusers(id:string){
        return this.http.delete(`${uriss.USERS}${id}/`).pipe(
            catchError((err:any) =>{
                return err;
            }),
            map ((resp: any)=>{
                return resp;
            })
        )
    }

    gettuserrs(){
        return this.http.get(`${uriss.USERS}`).pipe(
            catchError((err:any) =>{
                return err;
            }),
            map ((resp: any)=>{
                return resp;
            })
        )
    }
}