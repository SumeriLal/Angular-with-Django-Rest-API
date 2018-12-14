import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl = "http://127.0.0.1:8000/api";
  HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
  constructor(private http: HttpClient) {}
  getOneMovie(id): Observable<any> {
    return this.http.get(this.baseUrl + "/movies/" + id + "/", {
      headers: this.HttpHeaders
    });
  }
  getAllmovies(): Observable<any> {
    return this.http.get(this.baseUrl + "/movies/", {
      headers: this.HttpHeaders
    });
  }
  updateDetails(movie): Observable<any> {
    const body = { title: movie.title, desc: movie.desc, year: movie.year };
    return this.http.put(this.baseUrl + "/movies/" + movie.id + "/", body, {
      headers: this.HttpHeaders
    });
  }
  createMovie(movie): Observable<any> {
    const body = { title: movie.title, desc: movie.desc, year: movie.year };
    return this.http.post(this.baseUrl + "/movies/", body, {
      headers: this.HttpHeaders
    });
  }
  deleteMovie(id): Observable<any> {
    return this.http.delete(this.baseUrl + "/movies/" + id + "/", {
      headers: this.HttpHeaders
    });
  }
}
