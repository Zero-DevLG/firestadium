import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-new-game',
  templateUrl: './modal-new-game.component.html',
  styleUrls: ['./modal-new-game.component.css']
})
export class ModalNewGameComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

}
