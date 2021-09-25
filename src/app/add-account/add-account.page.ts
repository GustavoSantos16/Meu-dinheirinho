import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.page.html',
  styleUrls: ['./add-account.page.scss'],
})
export class AddAccountPage implements OnInit {

  public dados:any = {};
  public contas:any = [];
  contas_old: any = [];

  constructor(private navCtrl: NavController, private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  async cadastrar(){

    this.dados.id = Math.floor(Math.random() * 65536);

    if(localStorage.getItem('mycards.contas')){
      this.contas_old = JSON.parse(localStorage.getItem('mycards.contas'));
    }

    if(!this.dados.nome || !this.dados.saldo){
      this.mensagem('Os campos são obrigatórios.');
      return false;
    }
    
    this.contas_old.push(this.dados);

    localStorage.setItem('mycards.contas', JSON.stringify(this.contas_old));

    this.mensagem('Conta adicionada com sucesso!');

    this.navCtrl.navigateRoot('home');
  }

  back(){
    this.navCtrl.navigateBack('home');
  }

  async mensagem(msg){
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }


}
