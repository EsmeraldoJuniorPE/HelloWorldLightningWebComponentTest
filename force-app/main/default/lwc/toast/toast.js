import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { LightningElement } from 'lwc';

export default class Toast extends LightningElement {

    connectedCallback(){
        this.showToast('Sucesso', 'A tela foi iniciada com sucesso', 'success');
    }

    showToastAviso(){
        this.showToast('Aviso', 'Não pode fazer isso', 'warning');
    }

    showToastErro(){
        this.showToast('Erro', 'Deu errado', 'error');
    }

    showToast(title, message, variant) {          
        this.dispatchEvent(   new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        }));
    }
}