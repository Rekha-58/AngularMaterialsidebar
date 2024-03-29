import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrl: './thumb.component.css'
})
export class ThumbComponent {
  @Input() srcUrl: any;
}

