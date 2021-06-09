import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PaginationButtons extends Component {
    @action
    onPage(value) {
        window.location = "?page="+value;
    }
}