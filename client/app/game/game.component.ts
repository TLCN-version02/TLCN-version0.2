import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { GameService } from '../services/game.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Game } from '../shared/models/game.model';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

  game = new Game();
  games: Game[] = [];
  isLoading = true;
  isEditing = false;
  isDetail = false;

  addGameForm: FormGroup;
  name = new FormControl('', Validators.required);
  prizeamount = new FormControl('', Validators.required);

  constructor(private gameService: GameService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent,
              public auth: AuthService ) { }

  ngOnInit() {
    this.getGames();
    this.addGameForm = this.formBuilder.group({
      name: this.name,
      prizeamount: this.prizeamount,
    });
  }

  getGames() {
    this.gameService.getGames().subscribe(
      data => this.games = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addGame() {
    this.gameService.addGame(this.addGameForm.value).subscribe(
      res => {
        this.games.push(res);
        this.addGameForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(game: Game) {
    this.isEditing = true;
    this.game = game;
  }

  enableDetail(game: Game) {
    this.isDetail = true;
    this.game = game;
  }

  cancelEditing() {
    this.isEditing = false;
    this.game = new Game();
    this.toast.setMessage('item editing cancelled.', 'warning');
    this.getGames();
  }

  editGame(game: Game) {
    this.gameService.editGame(game).subscribe(
      () => {
        this.isEditing = false;
        this.game = game;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteGame(game: Game) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.gameService.deleteGame(game).subscribe(
        () => {
          const pos = this.games.map(elem => elem._id).indexOf(game._id);
          this.games.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
