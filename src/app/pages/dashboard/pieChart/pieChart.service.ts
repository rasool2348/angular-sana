import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.new_visits',
        stats: '۵۷,۸۲۰',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.purchases',
        stats: '$ ۸۹,۷۴۵',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'dashboard.active_users',
        stats: '۱۷۸,۳۹۱',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'dashboard.returned',
        stats: '۳۲,۵۹۲',
        icon: 'refresh',
      }
    ];
  }
}
