import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DataPager extends Component {
    @tracked page = 1;

    @tracked pagedData = this.getData(this.data, this.page, this.pageSize)
    @tracked isFirst = this.page == 1;
    @tracked isLast = this.pages <= this.page;
    @tracked nextPage = this.page + 1;
    @tracked previousPage = this.page - 1;

    pages = Math.ceil(this.args.data.length/this.pageSize);

    get pageSize(){
        return this.args.pageSize || 1;
    }

    get title(){
        return this.args.title || null;
    }

    get data(){
        return this.args.data || [];
    }


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
        this.pagedData = this.getData(this.data, this.page, this.pageSize)
    }
}