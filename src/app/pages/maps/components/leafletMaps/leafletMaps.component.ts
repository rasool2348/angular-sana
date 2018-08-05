import {Component, ElementRef} from '@angular/core';

import 'leaflet-map';

@Component({
  selector: 'leaflet-maps',
  templateUrl: './leafletMaps.html',
  styleUrls: ['./leafletMaps.scss']
})
export class LeafletMaps {

  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
    var map = L.map(el).setView([35.70, 51.34], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([35.70, 51.34]).addTo(map)
      .bindPopup('پاپ‌آپ زیبای CSS3 که به راحتی قابل تنظیم است.')
      .openPopup();
  }
}
