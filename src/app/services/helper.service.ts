import { Injectable } from '@angular/core';

@Injectable()

export class HelperService {
    constructor() { }
    
    treatmentOnData(data) {
        return this.removeEmptySlot(data);
    }

    removeEmptySlot(data) {
        data = data.split(' ');
        let filter_data = [];
        data.filter((d) => {
            if (d) {
                filter_data.push(d);
            }
        });
        return this.sortData(this.findFrequencyOfEachWord(filter_data));
    }

    findFrequencyOfEachWord(data) {
        let filter_data = {};
        for (let i = 0; i < data.length; i++) {
            if (!filter_data[data[i]]) {
                filter_data[data[i]] = { value: 1 };
            } else {
                filter_data[data[i]].value = filter_data[data[i]].value + 1;
            }
        }

        let format_data = [];
        for (let key in filter_data) {
            let d = [key, filter_data[key].value];
            format_data.push(d);
        }
        return format_data;
    }

    sortData(data) {
        let d = data;
        d.sort((a, b) => {
            if (a[1] < b[1]) {
                return 1;
            } else {
                return -1;
            }
        });
        return d;
    }
}