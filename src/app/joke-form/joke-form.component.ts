import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})

export class JokeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

}
