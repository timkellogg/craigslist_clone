import Ember from 'ember';

export function formatAddress(address, city) {
  var unformattedAddress = address;
  return unformattedAddress.replace(" ", "+");
}

export default Ember.Helper.helper(formatAddress);

// format-address model.address model.zip
