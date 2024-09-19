import MeuModal from 'c/modal';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { LightningElement } from 'lwc';

export default class toast extends LightningElement {

    result;

    connectedCallback() {
        this.showToast('Sucesso', 'A tela foi iniciada com sucesso',
            'success');
    }

    handleClick() {
        this.result = MeuModal.open({
            size: 'large',
            content: 'Abrir o Modal a partir de um outro componente',
        });
    }

    showToastAviso() {
        this.showToast('Aviso', 'Não pode fazer isso', 'warning');
    }
    
    showToastErro() {
        this.showToast('Erro', 'Deu errado', 'error');
    }
    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        }));
    }
}