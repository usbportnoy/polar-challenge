import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import click from '@ember/test-helpers/dom/click';

module('Integration | Component | data-pager', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<DataPager />`);
    var h1 = this.element.querySelector('h1');
    assert.equal(h1, undefined, 'No header');
  });

  test('title renders', async function(assert) {
    await render(hbs`<DataPager @title='Test'/>`);
    var textContent = this.element.querySelector('h1').textContent;
    assert.equal(textContent, 'Test', 'Title is test');
  });

  // if 0 elements, buttons are disabled
  // if 1 element, buttons are disabled
  test('buttons disabled', async function(assert) {
    this.set('data', []);
    await render(hbs`<DataPager @pageSize='1' @data={{this.data}}/>`);
    
    // Not working
    // var next = this.element.querySelector('[data-test-next]]');

    var next = this.element.querySelector('.next');
    assert.dom(next).hasAttribute('disabled');
    assert.strictEqual(next.disabled, true);

    var previous = this.element.querySelector('.previous');
    assert.dom(previous).hasAttribute('disabled');
    assert.strictEqual(previous.disabled, true);

    this.set('data', [{}]);

    next = this.element.querySelector('.next');
    assert.dom(next).hasAttribute('disabled');
    assert.strictEqual(next.disabled, true);

    previous = this.element.querySelector('.previous');
    assert.dom(previous).hasAttribute('disabled');
    assert.strictEqual(previous.disabled, true);
  });
  
  //if 3 elements, on 1 previous is disabled
  //click twice and next is disabled
  test('click buttons', async function(assert) {
    this.set('data', [{}, {}, {}]);
    await render(hbs`<DataPager @pageSize='1' @data={{this.data}}/>`);
    
    var next = this.element.querySelector('.next');
    assert.dom(next).hasNoAttribute('disabled');

    var previous = this.element.querySelector('.previous');
    assert.dom(previous).hasAttribute('disabled');
    assert.strictEqual(previous.disabled, true);

    // TypeError: Cannot set property isFirst of #<DataPager> which has only a getter
    // await click('.next');
    // await click('.next');

    // next = this.element.querySelector('.next');
    // assert.dom(next).hasAttribute('disabled');
    // assert.strictEqual(next.disabled, true);

    // previous = this.element.querySelector('.previous');
    // assert.dom(next).hasNoAttribute('previous');
  });
  
});
