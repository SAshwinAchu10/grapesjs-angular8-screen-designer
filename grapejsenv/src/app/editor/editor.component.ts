import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsForms from 'grapesjs-plugin-forms';

@Component({
  selector: 'editor-root',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  title = 'grapejsenv';
  
  ngOnInit() {
    const editor = grapesjs.init({
      container : '#gjs',
      plugins: [gjsPresetWebpage, editor => gjsForms(editor, { /* options */ }),],
      pluginsOpts: {
        gjsPresetWebpage: {
          gjsForms
          // options
        }
      },
      components: '<div class="txt-red">Hello world!</div>',
      style: '.txt-red{color: red}',
  });
  }
}
