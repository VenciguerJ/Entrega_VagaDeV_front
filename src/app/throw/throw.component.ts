import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Jogo } from '../models/jogo.model';
import { JogoService } from '../services/jogo.service';

@Component({
  selector: 'app-throw',
  templateUrl: './throw.component.html',
  styleUrls: ['./throw.component.css'],
  standalone: true,
  imports: [FormsModule],  // Importando FormsModule aqui também
})
export class ThrowComponent {
  jogo: Jogo = {
    DataJogo: '',
    QuantidadePontos: 0,
  };
  mensagem: string = '';

  constructor(private jogoService: JogoService) {}

  onSubmit() {
    // this.jogo.DataJogo = new Date().toISOString();
    this.jogoService.throwPoints(this.jogo).subscribe({
      next: () => {
        this.mensagem = 'Jogo enviado com sucesso!';
      },
      error: (err) => {
        console.error('Erro ao enviar o jogo:', err);
        this.mensagem = 'Erro ao enviar o jogo.';
      },
    });
  }
}
