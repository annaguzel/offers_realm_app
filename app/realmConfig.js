import Realm from 'realm';

const OfferSchema = {
  name: 'offer',
  properties: {
    _id: 'objectId?',
    clickCount: 'int?',
    companyName: 'string?',
    description: 'string?',
    discountCode: 'string?',
  },
  primaryKey: '_id',
};

export {OfferSchema};
