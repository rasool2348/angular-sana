import {Injectable} from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private _notifications = [
    {
      name: 'Vlad',
      text: 'کامران یک پست جدید ارسال کرده است.',
      time: '۱ دقیقه پیش'
    },
    {
      name: 'Kostya',
      text: 'کوروش اطلاعات تماس خور را به روز کرد.',
      time: '۲ ساعت پیش'
    },
    {
      image: 'assets/img/shopping-cart.svg',
      text: 'سفارشات جدید ثبت شد.',
      time: '۵ ساعت پیش'
    },
    {
      name: 'Andrey',
      text: 'هومن به نظر شما پاسخ داد.',
      time: '۱ روز پیش'
    },
    {
      name: 'Nasta',
      text: 'امروز تولد ساناز است.',
      time: '۲ روز پیش'
    },
    {
      image: 'assets/img/comments.svg',
      text: 'نظر جدید بر روی مطلب شما.',
      time: '۳ روز پیش'
    },
    {
      name: 'Kostya',
      text: 'کامران از شما برای یک رویداد دعوت کرده است.',
      time: '۱ هفته پیش'
    }
  ];

  private _messages = [
    {
      name: 'Nasta',
      text: 'بعد از اینکه شما برپا کردید بعد از آن میتواند از آیکون های متنوع بهره ببرید. . .',
      time: 'یک دقیه پیش'
    },
    {
      name: 'Vlad',
      text: 'شما خواستید ، فونت آوسوم با ۴۰ آیکون جدید در خدمت شماست در نگارش ۴.۲',
      time: '۲ پیش'
    },
    {
      name: 'Kostya',
      text: 'آیا به آیکون های جدید نیاز دارید ؟ آنها را دریافت و استفاده نمایید',
      time: '۱۰ ساعت پیش'
    },
    {
      name: 'Andrey',
      text: ' داسنه های خود را بسط دهید و چیزهای جدیدی را کشف نمایید و . . .',
      time: '۱ روی پیش'
    },
    {
      name: 'Nasta',
      text: ' میخواهید بدانید ما چه کسانی هستیم ؟ ما یک تیم موفق تاریخی هستیم و . . .',
      time: '۱ روز پیش'
    }, 
    {
      name: 'Kostya',
      text: 'برای دسیدن به اهدافتان نیاز به کمک دارید ؟ امروز ثبت نام کنید تا کمک های ما را ...',
      time: '۱۰ روز پیش'
    },
    {
      name: 'Vlad',
      text: 'از منوهای جدید در وب سایت ما دیدن کنید . شما را شگفت زده خواهیم کرد و ...',
      time: '۱ هفته پیش'
    }
  ];

  public getMessages():Array<Object> {
    return this._messages;
  }

  public getNotifications():Array<Object> {
    return this._notifications;
  }
}
