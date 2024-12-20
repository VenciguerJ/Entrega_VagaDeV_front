import { Component, OnInit } from '@angular/core';
import { JogoService } from '../services/jogo.service';
import { Resultados } from '../models/Resultados';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true, // Caso seja standalone
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'], // Corrigido de styleUrl para styleUrls
})
export class ResultsComponent implements OnInit {
  resultados: Resultados | null = null; // Ajustado para refletir a nova estrutura
  loading = true; // Controle de carregamento
  error: string | null = null; // Controle de erros

  constructor(private jogoService: JogoService) {}

  ngOnInit(): void {
    this.jogoService.getResultados().subscribe(
      (data) => {
        console.log(data); // aqui é possível ver a data chegando tratada do json
        this.resultados = data; 
        console.log('Data Inicial:', data.datainicial); // infelizmente enfrentei problemas ao colocar a data no frontend, acredite, nao foi por falta de tentativas
        console.log('Data Final:', data.datafinal); // tentei usar diversos tipos de dados, mas o angular entende a string como undefined
        this.loading = false;
      },
      
      (err) => {
        this.error = 'Erro ao carregar os resultados';
        this.loading = false;
        console.error(err);
      }
    );
  }
}
