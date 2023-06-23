import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-shi',
  templateUrl: './shi.page.html',
  styleUrls: ['./shi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
