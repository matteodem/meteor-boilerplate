import { chai } from 'meteor/practicalmeteor:chai'
import loadFixtures from './FixturesLoader'

let fakeCollection

describe('Fixtures Loader', function () {
  beforeEach(function () {
    fakeCollection = {
      items: [],
      findOne() {
        return false
      },
      insert(doc) {
        this.items.push(doc)
      },
      getItems() {
        return this.items
      },
    }
  })

  it('validly loads fixture documents', function () {
    loadFixtures([{ foo: 'bar' }, { foo: 'bar2' }], fakeCollection)

    chai.assert.equal(fakeCollection.getItems().length, 2)
    chai.assert.equal(fakeCollection.getItems()[0].foo, 'bar')
    chai.assert.equal(fakeCollection.getItems()[1].foo, 'bar2')
  })

  it('doesnt load fixture documents if already there ', function () {
    fakeCollection.findOne = () => true

    loadFixtures([{ foo: 'bar' }, { foo: 'bar2' }], fakeCollection)

    chai.assert.equal(fakeCollection.getItems().length, 0)
  })
})
