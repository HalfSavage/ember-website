var Location = DS.Model.extend({
  isActive: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  name: DS.attr(),
  address1: DS.attr(),
  address2: DS.attr(),
  city: DS.attr(),
  region: DS.attr(),
  postalCode: DS.attr(),
  country: DS.attr()
});

Location.FIXTURES = [
  {
    id:1,
    isActive: true,
    latitude: 47.650003899999994,
    longitude: -122.3749215,
    name: 'Thunderdome',
    address1: '1401 W Bertona St.',
    address2: 'Apt 3',
    city: 'Seattle',
    region: 'Pacific',
    postalCode: '98119',
    country: 'United States'
  }
];

export default Location;
