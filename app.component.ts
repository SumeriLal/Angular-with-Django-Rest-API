import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  movies = [];
  selectedMovie;

  constructor(private api: ApiService) {
    this.getMovies();
    this.selectedMovie = { id: -1, title: "", desc: "", year: "" };
  }
  getMovies = () => {
    this.api.getAllmovies().subscribe(
      data => {
        this.movies = data;
      },
      error => {
        console.log(error);
      }
    );
  };
  movieClicked = movie => {
    this.api.getOneMovie(movie.id).subscribe(
      data => {
        this.selectedMovie = data;
      },
      error => {
        console.log(error);
      }
    );
  };
  updateDetails = () => {
    this.api.updateDetails(this.selectedMovie).subscribe(
      data => {
        this.selectedMovie = data;
      },
      error => {
        console.log(error);
      }
    );
  };
  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        this.selectedMovie = data;
      },
      error => {
        console.log(error);
      }
    );
  };
  deleteMovie = () => {
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {},
      error => {
        console.log(error);
      }
    );
  };
}
