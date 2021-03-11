import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

    public contador: number = 0;
    urlImage: string = 'https://st.depositphotos.com/1780879/3816/i/600/depositphotos_38166573-stock-photo-trees-with-sunbeams.jpg';
    public algo: string = '';
    public nome: string = '';

    adicionar() {
        this.contador ++
    }

    zerar() {
        this.contador = 0
    }

    keypress(event: any) {
        this.algo = event.target.value
    }
}
