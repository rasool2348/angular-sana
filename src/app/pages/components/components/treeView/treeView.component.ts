import {Component} from '@angular/core';
import {TreeModel} from 'ng2-tree';

@Component({
  selector: 'tree-view',
  templateUrl: './treeView.html',
})

export class TreeView {

  tree: TreeModel = {
    value: 'زبان های برنامه نویسی با پارادیم برنامه نویسی',
    children: [
      {
        value: 'برنامه‌نویسی شی‌گرا',
        children: [
          {value: 'جاوا'},
          {value: 'سی-پلاس-پلاس'},
          {value: 'سی-شارپ'},
        ]
      },
      {
        value: 'برنامه نویس بدون ساختار داده',
        children: [
          {value: 'جاوااسکریپت'},
          {value: 'کافی‌اسکریپت'},
          {value: 'لووا'},
        ]
      }
    ]
  };

  constructor() {
  }

}
