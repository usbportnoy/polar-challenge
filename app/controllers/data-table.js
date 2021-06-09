import Controller from '@ember/controller';

export default class DataTableController extends Controller {
    queryParams = ['page'];
    page = 1;
}
