import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private _data = [
    {
      type: 'text-message',
      author: 'کوروش',
      surname: 'دلپاک',
      header: 'Posted new message',
      text: 'بچه ها ، این رو ببینید : یک افسر پلیس یه جای خوب برای کارگذاشتن دوربین کنترل سرعت پیدا کرده',
      time: 'Today 11:55 pm',
      ago: '25 minutes ago',
      expanded: false,
    }, {
      type: 'video-message',
      author: 'کامران',
      surname: 'اکبری',
      header: 'ویدپو جدید اضافه شد',
      text: '"احسان و من"',
      preview: 'app/feed/vader-and-me-preview.png',
      link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
      time: 'Today 9:30 pm',
      ago: '3 hrs ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'ساناز',
      surname: 'جعفری',
      header: 'عکس جدید اضافه شد',
      text: '"گربه ناز من"',
      preview: 'app/feed/my-little-kitten.png',
      link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
      time: 'Today 2:20 pm',
      ago: '10 hrs ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'سیمین',
      surname: 'کامرانی',
      header: 'Posted new message',
      text: 'ها ها . لول',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    }, {
      type: 'geo-message',
      author: 'سامان',
      surname: 'کلانتر',
      header: 'ارسال موقعیت',
      text: '"نیویورک  ، آمریکا"',
      preview: 'app/feed/new-york-location.png',
      link: 'https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'ساناز',
      surname: 'جعفری',
      header: 'Posted new message',
      text: "دوستان عزیزم ، من حالم خوبه و اینجا خیلی خوش میگذره !",
      time: '12.11.2015',
      ago: '3 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'کامران',
      surname: 'اکبری',
      header: 'Posted new message',
      text: 'کسی هست این موقع صبح ؟ هی بچه ها زودتر بیدار  شید . خیلی کار داریم .',
      time: '14.11.2015',
      ago: '5 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'سیمین',
      surname: 'کامرانی',
      header: 'Posted new message',
      text: 'وقتی چکش شما قدرتمند بشه ، همه چیز مقل انگشت شصت میشه.',
      time: '14.11.2015',
      ago: '5 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'هومن',
      surname: 'راد',
      header: 'Posted new message',
      text: 'به نظر من این مثل این میمونه که به شما بگویند دوبار بمیر .! آیا چنین چیزی ممکن است ؟',
      time: '15.11.2015',
      ago: '6 days ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'سامان',
      surname: 'کلانتر',
      header: 'عکس ارسال شده کرده است',
      text: '"قهرمانان جدید "',
      preview: 'app/feed/genom.png',
      link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
      time: '16.11.2015',
      ago: '7 days ago',
      expanded: false,
    },
    {
      type: 'text-message',
      author: 'کوروش',
      surname: 'دلپاک',
      header: 'Posted new message',
      text: 'چرا برنامه نویسان در ابتدای دوران برنامه نویسی شا با سرعت پیشرفت میکنند ؟؟',
      time: '18.11.2015',
      ago: '9 days ago',
      expanded: false,
    }
  ];

  getData() {
    return this._data;
  }
}
