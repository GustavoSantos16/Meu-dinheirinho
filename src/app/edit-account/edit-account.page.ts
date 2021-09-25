import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
  id: any;
  dados:any = {};
  contas:any =[];

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.contas = JSON.parse(localStorage.getItem('mycards.contas'));

    this.contas.forEach(conta => {
      if(this.id== conta.id){
         this.dados = conta;
      }
    });

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

  async editar(){

    if(!this.dados.nome || !this.dados.saldo){
      this.mensagem('Os campos são obrigatórios.');
      return false;
    }
  

    let position = 0;
    this.contas.forEach(conta => {

      if(this.id == conta.id){
       this.contas[position] = conta; 
      }

     position++;
    });

    this.mensagem('Conta alterada com sucesso!')

    localStorage.setItem('mycards.contas', JSON.stringify(this.contas));
    this.navCtrl.navigateRoot('home');
  }

  async excluir(){
    let position = 0;
    this.contas.forEach(conta => {
      if(this.id == conta.id){
       this.contas.splice(position, 1);
      }
     position++;
    });

    this.mensagem('Conta excluida com sucesso!');

    localStorage.setItem('mycards.contas', JSON.stringify(this.contas));
    this.navCtrl.navigateRoot('home');
  }

}
