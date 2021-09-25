import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contas: any = [];
  saldo: any = 0.0;

  constructor(private navCtrl:NavController) {}

  ionViewDidEnter(){
    this.saldo = 0.0;
    if(localStorage.getItem('mycards.contas')){
      this.contas = JSON.parse(localStorage.getItem('mycards.contas')).reverse();
    }else{
      this.contas = [];
    }

    this.contas.map(conta => {
      this.saldo = this.saldo + parseFloat(conta.saldo.replace(/\./g,'').replace(',', '.'));
    });

    this.saldo = this.saldo.toLocaleString('pt-br', {minimumFractionDigits: 2});
    
  }

  openPage(){
    this.navCtrl.navigateForward('add-account');
  }

  clear(){
    localStorage.removeItem('mycards.contas');
  }

  openAccount(id){
    this.navCtrl.navigateRoot('edit-account/'+id);
  }
}
