import { moduleForModel, test } from 'ember-qunit';

moduleForModel('salesman', 'Unit | Serializer | salesman', {
  // Specify the other units that are required for this test.
  needs: ['serializer:salesman']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
