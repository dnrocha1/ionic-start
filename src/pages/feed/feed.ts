import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public nome_usuario:string = "Daniyel Rocha from code";

  public objeto_feed = {
    titulo: "Daniyel N. Rocha",
    data: "November 5, 1955",
    descricao: "Wtf is all of this?!",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();

  public somaDoisNumeros() {
    alert(this.nome_usuario);
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private movieProvider: MovieProvider
  ) {
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros();
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(this.lista_filmes);
        //console.log(data['results']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
