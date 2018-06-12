import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "" +
    "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor() {
    let items = [
      {
        "name": "سس بافولو ",
        "profilePic": "assets/img/speakers/vegsis1.jpg",
        "about":"این سس معمولا تند و با غذاهای سوخاری شده سرو میشود. بنا به سلیقه خودتان میتوانید درجه تند بودن آن را کم یا زیاد\n" +
        "کنید",
        "time": "زمان تهیه:۱۰ دقیقه ",
        "person":"۴ نفر" ,
        "ing1":"پودر فلفل قرمز: به مقدار لازم" ,
        "ing2":"شیر سویا: یک فنجان" ,
        "ing3":"سرکه سفید: نصف فنجان" ,
        "ing4":"سس کچاپ: یک قاشق غذاخوری" ,
        "ing5":"شکر: دو تا سه قاشق غذاخوری" ,
        "ing6":"پودر سیر: نصف قاشق غذاخوری" ,
        "ing7":"" ,
        "ing8":"" ,
        "ing9":"" ,
        "ing10":"" ,
        "ing11":"" ,
        "ing12":"" ,
        "ing13":"" ,
        "ing14":"" ,
        "ing15":"" ,
        "ingredients":"" ,
        "makeit1":".١ -بر روی حرارت ملایم، شیرسویا، سس کچاپ، سرکه، شکر، فلفل و پودر سیر را در داخل ظرفی قرار دهید" ,
        "makeit2":".- به مدت ۵ تا ١٠ دقیقه اجازه دهید که سس شما پخته شود تا اینکه کم کم غلیظ شود٢" ,
        "makeit3":".- بعد از اینکه سس خنک شده آن را داخل ظرف مناسب ریخته و در یخچال نگهداری کنید٣" ,
        "makeit4":"" ,
        "makeit5":"" ,
        "makeit6":"" ,
        "makeit7":"" ,
        "makeit8":"" ,
        "makeit9":"" ,
        "makeit10":"" ,
        "makeit11":"" ,
        "makeit12":"" ,
        "makeit13":"" ,
        "makeit14":"" ,
        "makeit15":"" ,
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
