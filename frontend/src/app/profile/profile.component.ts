import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rickandmorty.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  characters: any = [];
  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit() {
    this.rickAndMortyService.getCharacters()
      .subscribe(
        res => {
          this.characters = res.results;
          console.log(this.characters);
        },
        err => console.log(err)
      )
  }
}
