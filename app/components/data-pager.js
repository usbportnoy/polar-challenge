import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DataPager extends Component {
    @tracked page = 1;

    get pages(){
        return Math.ceil(this.data.length/this.pageSize);
    }

    get pageSize(){
        if(this.args.pageSize == 0) return 1;
        return this.args.pageSize || 1;
    }

    get title(){
        return this.args.title || null;
    }

    get data(){
        return this.args.data || [];
    }

    get isFirst(){
        return this.page == 1;
    }

    get isLast(){
        return this.pages <= this.page;
    }

    get nextPage(){
        return this.page + 1;
    }

    get previousPage(){
        return this.page -1;
    }

    get pagedData(){
        return this.getData(this.data, this.page, this.pageSize);
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