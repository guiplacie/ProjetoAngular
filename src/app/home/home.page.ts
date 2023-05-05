import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule , CommonModule],
})
export class HomePage{
  produtos = [
    {id:0, nome: 'PS4', preco: 'R$ 2000,00',  marca: 'Sony', image: 'https://images.pexels.com/photos/1082810/pexels-photo-1082810.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    {id:1, nome: 'PS5', preco: 'R$ 5000,00', marca: 'Sony', image:'https://images.pexels.com/photos/14824332/pexels-photo-14824332.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {id:2, nome: 'Polisatation', preco: 'R$ 200,00', marca: 'Polishop', image:'https://images.pexels.com/photos/2728255/pexels-photo-2728255.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {id:3, nome: 'Super Nitendo', preco: 'R$ 900,00', marca: 'Nitendo', image:'https://images.pexels.com/photos/4842495/pexels-photo-4842495.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {id:4, nome: 'Super Nes', preco: 'R$ 250,00', marca: 'Super Tech', image:'https://images.pexels.com/photos/1367036/pexels-photo-1367036.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {id:5, nome: 'MegaDrive', preco: 'R$ 800,00', marca: 'Sega', image:'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  ];
  

  alertButtons = ['OK'];
}
