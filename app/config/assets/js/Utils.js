// REQUIRES StaticData.js TO BE INCLUDED IN THE HTML FILE

const Utils = {
  // returns a string containing option elements from a json key/value list
  genSelectOptions: function (OptionsJSON, filter) {
    var selectItems = '';
    $.each(OptionsJSON, (key, value) => {
      let item = '<option value=\'' + key + '\'>' + value + '</option>';

      // if we dont have a filter or the filter is true add the items
      if (filter === undefined || filter === null || filter(key, value)) selectItems += item;
    });
    return selectItems;
  },

  // add option elements to every select with the data-options-list attribute set
  populateSelects: function (filter) {
    let option_output = {};
    $('select').each(function () {
      let elem = $(this);
      let list_name = elem.data('options_list'); // read in the list name from the select's data-options_list attribute
      if (!list_name) return; // if it didn't have options list set then continue

      if (!(list_name in option_output)) { // gen the options for that list if we haven't already
        option_output[list_name] = Utils.genSelectOptions(DataLists[list_name], filter);
      }
      // append them to the select
      elem.append(option_output[list_name]);
    });
  },

  save_value_to_params: function (key, value) {
    let params = JSON.parse(localStorage.getItem(Constants.LocalStorageKeys.SELECTION_PARAMS));
    params[key] = value;
    localStorage.setItem(Constants.LocalStorageKeys.SELECTION_PARAMS, JSON.stringify(params));
  },
   get_tree_prev: function (stand, plot, tag, callback) {
      var prevSuccess = function (prevResults) {
        let len = prevResults.getCount();

        let prev = {};
        if (len > 0) {
        prev['_id'] = prevResults.getData(0, "_id");
        prev['id'] = prevResults.getData(0, "ID");
        prev['stand'] = prevResults.getData(0, "StandID");
        prev['plot'] = prevResults.getData(0, "Plot");
        prev['tag'] = prevResults.getData(0, "Tag");
        prev['PrevYear'] = prevResults.getData(0, "PrevYear");
        prev['species'] = prevResults.getData(0, "Species");
        prev['status'] = prevResults.getData(0, "PrevStatus");
        prev['ht'] = prevResults.getData(0, "PrevHt");
        prev['idQual'] = prevResults.getData(0, "PrevIDQual");
        prev['gx'] = prevResults.getData(0, "GX");
        prev['gy'] = prevResults.getData(0, "GY");
        prev['cell'] = prevResults.getData(0, "Cell");
        prev['comments'] = prevResults.getData(0, "PrevComments");
          callback(prev);
        }
        else callback(null);
      }

      var prevFailure = function (err) {
        console.log(err);
        callback(null);
      }

      odkData.query('prev_data', 'StandID=? AND Plot=? AND Tag=?', [stand, plot, tag], null, null, '_savepoint_timestamp', 'DESC', 1, 0, null, prevSuccess, prevFailure);
    },
  get_herb_prev: function (stand, plot, species, callback) {
    var prevSuccess = function (prevResults) {
      let len = prevResults.getCount();

      let prev = {};
      if (len > 0) {
        prev['_id'] = prevResults.getData(0, "_id");
        prev['HerbID'] = prevResults.getData(0, "HerbID");
        prev['stand'] = prevResults.getData(0, "StandID");
        prev['plot'] = prevResults.getData(0, "Plot");
        prev['PrevYear'] = prevResults.getData(0, "PrevYear");
        prev['herbspecies'] = prevResults.getData(0, "HerbSpecies");
        prev['cover'] = prevResults.getData(0, "Cover");
        prev['avgcell'] = prevResults.getData(0, "AvgCell");
        prev['stemcount'] = prevResults.getData(0, "PrevStemCount");
        prev['comments'] = prevResults.getData(0, "PrevComments");
        callback(prev);
      } else callback(null);
    }

    var prevFailure = function (err) {
      console.log(err);
      callback(null);
    }

    odkData.query('prev_herbs', 'StandID=? AND Plot=? AND HerbSpecies=?', [stand, plot, HerbSpecies], null, null, '_savepoint_timestamp', 'DESC', 1, 0, null, prevSuccess, prevFailure);
  },

}

Object.freeze(Utils);
