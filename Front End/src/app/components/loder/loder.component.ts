import { Component, OnInit } from '@angular/core';
import { LoderService } from '../services/loder.service';

@Component({
  selector: 'app-loder',
  templateUrl: './loder.component.html',
  styleUrls: ['./loder.component.css']
})
export class LoderComponent implements OnInit {

  isLoading = this.loaderService.isLoading;
  constructor(private loaderService:LoderService) { }

  ngOnInit(): void {
  }

}
