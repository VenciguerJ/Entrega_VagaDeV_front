import { Component } from '@angular/core';
import { Jogo } from './models/jogo.model';
import { JogoService } from './services/jogo.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule],  // Certifique-se de importar RouterModule
})
export class AppComponent {
  jogo: Jogo = {
    DataJogo: '', 
    QuantidadePontos: 0,
  };
  mensagem: string = '';
  title: string = 'lançamento de pontos de basquete';
  constructor(private jogoService: JogoService) {}

  onSubmit() {
    this.jogo.DataJogo = new Date().toISOString();
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
