import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('user')
  },

  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      var _this_ = this;

      this.get("session").open("firebase", { provider: provider}).then(function(data) {

        var params = {
          uid: data.uid,
          displayName: data.currentUser.displayName,
          profileImageURL: data.currentUser.profileImageURL
        };

        console.log(data.uid);
        // var peters = this.store.find('person', { name: "Peter" });
        var record = _this_.store.findAll('user');
        console.log(record.uid);

        var foundRecord = _this_.store.findAll('user');
          foundRecord.find('uid', data.uid);
          console.log(foundRecord.get('uid'));
        });

        // console.log(_this_.store.queryRecord('user', { uid: params.uid }))

        // .then(function(user) {
        //   if (user) {
        //     console.log('user if block')
        //     return user;
        //   } else {
        //     console.log('user else block')
        //     var newUser = _this_.store.createRecord('user', params);
        //     newUser.save();
        //   }
        // });
      // });
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});

// savePost() {
//   var params = {
//     title: this.get('title'),
//     body: this.get('body'),
//     price: this.get('price'),
//     time: new Date(),
//     edited: false,
//     category: this.categoryRecord,
//     image: this.get('image'),
//     address: this.get('address'),
//   };
//   this.sendAction('savePost', params);
// },
//
// store: Ember.inject.service(),
//
// _findOrCreateUser(authData) {
//
//   let store = this.get('store');
//
//   return store.find('user', authData.uid)
//   .catch(() => {
//     let newUser = store.createRecord('user', this.extractUserProperties(authData));
//
//     return newUser.save();
//   });
// },
//
// extractUserProperties(authData) {
//   console.log('asdfdf');
//   var name = 'Unknown';
//   var provider = authData.provider;
//   var userData = authData[provider];
//
//   if (userData.displayName) {
//     name = userData.displayName;
//   } else if (userData.username) {
//     name = userData.username;
//   }
//
//   return {
//     id: authData.uid,
//     email: userData.email || null
//   };
// }
