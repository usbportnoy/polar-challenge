import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DataPager extends Component {
    @tracked page = 1;
    @tracked pages = Math.ceil(this.args.data.length/this.args.pageSize);

    @tracked pagedData = this.getData(this.args.data, this.page, this.args.pageSize)
    @tracked isFirst = this.page == 1;
    @tracked isLast = this.pages <= this.page;
    @tracked nextPage = this.page + 1;
    @tracked previousPage = this.page - 1;

    getData = function(content, page, max){
        return content.slice((page - 1) * max, page * max);
    }

    @action
    onPage(value) {
        this.page = value;
        this.isFirst = this.page == 1;
        this.isLast = this.pages <= this.page;
        this.nextPage = this.page + 1;
        this.previousPage = this.page - 1;
        this.pagedData = this.getData(this.args.data, this.page, this.args.pageSize)
    }
}