import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-good-button',
  imports: [CommonModule],
  templateUrl: './good-button.component.html',
  styleUrl: './good-button.component.css',
})
export class GoodButtonComponent {
  @Input({ required: true }) buttonText?: string;

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
