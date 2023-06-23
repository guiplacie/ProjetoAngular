import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-donkeykong',
  templateUrl: './donkeykong.page.html',
  styleUrls: ['./donkeykong.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DonkeykongPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
