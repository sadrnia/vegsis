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
        "name": "لازانیا وگان با سس نخود ",
        "profilePic": "assets/img/speakers/vegsis1.jpg",
        "about":"ما وگان ها هم لازانیا دوست داریم. شاید درنگاه اول این غذا به نظر غیر معمول باشد، اما بعد از مزه کردن همه را محسور خود میکند. سس این لازانیا خیلی ساده هست و از نخود، گوجه فرنگی و سبزیجات معطر درست میشود که عطر خاصی به لازانیا ما میدهد.",
        "time": "زمان پخت: ۳۰ دقیقه",
        "person":"تعداد: ۶ تا ۸ نفر" ,
        "ingredients":"نخود پخته شده: ۲۵۰ گرم\n" +
        "\n" +
        "رب گوجه فرنگی: ۴ قاشق غذاخوری\n" +
        "\n" +
        "سیر: یک حبه\n" +
        "\n" +
        "برگ بو: ۴ پر\n" +
        "\n" +
        "رزماری، آویشن و ریحان به مقدار لازم\n" +
        "\n" +
        "سس سویا: ۲ قاشق غذاخوری\n" +
        "\n" +
        "نمک و فلفل: به مقدار لازم\n" +
        "\n" +
        "لازانیا:\n" +
        "\n" +
        "سیب زمینی: نیم کیلو\n" +
        "\n" +
        "اسفناج: ۲۰۰ گرم",
        "makeit":"۱- داخل مایتابه روغن گیاهی را بربزین\n" +
        "\n" +
        "۲- سیر را خورد کرده و برگ بو، رزماری و آویشن را اضافه کنید.\n" +
        "\n" +
        "۳- روی حرارت ملایم مرتب هم میزنیم تا رنگ سیر طلایی شود.\n" +
        "\n" +
        "۴- کم کم نخود پخته شده رو اضافه کنید.\n" +
        "\n" +
        "۵- رب گوجه فرنگی،و ریحان  را اضافه کنید. \n" +
        "\n" +
        "۶- چند دقیقه صبر کنید، سپس برگ بو را از مخلوط جدا کنید.\n" +
        "\n" +
        "۷- حالا سس سویا را اضافه کنید، مزه سس را بچشید و در صورت نیاز نمک و فلفل اضافه کنید. \n" +
        "\n" +
        "۸- سس را کنار بگذارید. \n" +
        "\n" +
        "\n" +
        "\n" +
        "تهیه سس بشامل:\n" +
        "\n" +
        "۱- در یک مایتابه، روغن آفتابگردان را به آرد مخلوط کنید و به آرامی با قاشق چوبی هم بزنید.\n" +
        "\n" +
        "۲- حالا شیر سویا را اضافه کنید و بدون اینکه هم بزنید اجازه دهید مخلوط به جوش بیاید.\n" +
        "\n" +
        "۳- نمک، فلفل و جوز هندی را اضافه کنید. \n" +
        "\n" +
        "۴-  سس را کنار بگذارید. ",



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
