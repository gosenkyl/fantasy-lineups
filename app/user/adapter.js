import DS from 'ember-data';
import FantasyLineupsAdapter from 'fantasy-lineups/fantasy-lineups/adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default FantasyLineupsAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application'
});
