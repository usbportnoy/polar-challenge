import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DataTableRoute extends Route {
    queryParams = {
        page: {
            refreshModel: true        
        }
    }

    max = 1;

    content = [
        {
            name: "Hank Hill",
            quote: "Bwaaa!",
            altQuote: "That boy ain't right.",
        },
        {
            name: "Peggy Hill",
            quote: "Autumn - love it or leaf it",
            altQuote: "Although there is no \"L\" is Christmas, there is \"NOEL\" in Christmas"
        },
        {
            name: "Bobby Hill",
            quote: "I don't know you!",
            altQuote: "To tell you the truth, Dad, that sounds boring"
        }
    ];

    pages = Math.ceil(this.content.length/this.max);

    getData = function(content, page, max){
        return content.slice((page - 1) * max, page * max);
    }

    model(params){
        return {
            isLast: this.pages <= params.page, 
            isFirst: params.page == 1,
            page: params.page,
            nextPage: params.page + 1,
            previousPage: params.page - 1,
            data: this.getData(this.content, params.page, this.max),
            totalPages: this.pages
        }
    }
}
