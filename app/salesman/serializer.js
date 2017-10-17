import DS from 'ember-data';
import FantasyLineupsSerializer from 'fantasy-lineups/fantasy-lineups/serializer';

export default FantasyLineupsSerializer.extend({

  attrs: {
    user: {key: "userId"}
  }

});
