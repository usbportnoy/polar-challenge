import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DataTableRoute extends Route {
    model(){
        return [
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
    }
}
