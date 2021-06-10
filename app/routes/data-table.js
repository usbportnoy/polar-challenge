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
            },
            {
                name: "Luanne Platter",
                quote: "No, Uncle Hank. Mama and Daddy are still fighting.",
                altQuote: "Boy. Aunt Peg the words I don't know could fill a dictionary"
            },
            {
                name: "Joseph Gribble",
                quote: "Your mom is as cool as most peoples dads",
                altQuote: "Sup."
            },
        ];
    }
}
