import { Component, InputSignal, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StreamingChannel } from '../../models/StreamingChannel';


@Component({
 selector: 'app-movie-modal',
 standalone: true,
 imports: [ReactiveFormsModule],
 templateUrl: './movie-modal.html',
 styleUrl: './movie-modal.css'
})
export class MovieModal {
 addMovieForm: FormGroup;
 channelList: InputSignal<StreamingChannel[]> =
 input.required<StreamingChannel[]>();

 constructor(private formBuilder: FormBuilder) {
    this.addMovieForm = this.formBuilder.group({
    title: [''],
    description: [''],
    streaming_channel: ['']
    });
  }
  onSubmit(): void {
    console.log(this.addMovieForm.value);
  }
}
