import Ember from 'ember';

export function formatCurrency(params) {
  return "$" + params + ".00";
}

export default Ember.Helper.helper(formatCurrency);
