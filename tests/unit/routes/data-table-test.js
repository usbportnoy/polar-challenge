import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | data-table', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:data-table');
    assert.ok(route);
  });
});
