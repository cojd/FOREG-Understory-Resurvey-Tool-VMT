$(function () {

  // grab stand and plot from session variables
  let params = JSON.parse(localStorage.getItem(Constants.LocalStorageKeys.SELECTION_PARAMS));
  console.log('params');
  console.log(params);

  let p = {}
  if (params) {
    // remove tree specific data from query results just to be safe
    p = { type: params.type, stand: params.stand };
    if (params.type === Constants.PlotTypes.FIXED_RADIUS_PLOT) p.plot = params.plot;
    localStorage.setItem(Constants.LocalStorageKeys.SELECTION_PARAMS, JSON.stringify(p));
    localStorage.setItem(Constants.LocalStorageKeys.TREE_QUERY_RESULTS, JSON.stringify({}));

    $('#stand').val(p.stand);
    $('#plot').val(p.plot);
  }

  bindButtons(p);
});

function fetchPrevDataForStandDoc(stand, plot) {
  let query = `SELECT * FROM prev_data WHERE StandID=? AND Plot=?`;
  let params = [stand, plot];
  odkData.arbitraryQuery('prev_data', query, params, null, null, function(result) {
    // Store the result in the localStorage
    localStorage.setItem(Constants.LocalStorageKeys.TREE_QUERY_RESULTS, JSON.stringify(result));
  }, console.log);
}

function bindButtons(params) {
  // links to generic html pages
  var remeasureFormButton = $('#remeasure-form');
  remeasureFormButton.on('click', function () {
    odkTables.launchHTML(null, 'config/assets/html/tag_picker.html')
  });

  var ingrowthFormButton = $('#ingrowth-form');
  ingrowthFormButton.on('click', function () {
    Utils.save_value_to_params("form_def", "ingrowth");
    odkTables.launchHTML(null, 'config/assets/html/form.html')
  });

  var herbsFormButton = $('#herbs-form');
  herbsFormButton.on('click', function () {
    Utils.save_value_to_params("form_def", "herbs");
    odkTables.launchHTML(null, 'config/assets/html/form.html')
  });

  var missingTreesButton = $('#missing-trees');
  missingTreesButton.on('click', function () {
    odkTables.launchHTML(null, 'config/assets/html/missing_trees.html')
  });

  var standDocFormButton = $('#stand-doc-form');
  standDocFormButton.on('click', function () {
    // Fetch the prev_data for the current stand and plot
    fetchPrevDataForStandDoc(params.stand, params.plot);

    // Save the form_def to params
    Utils.save_value_to_params("form_def", "stand_doc");

    // Launch the stand_doc form
    odkTables.launchHTML(null, 'config/assets/html/form.html')
  });

  var mortalityListButton = $('#mortality-list');
  mortalityListButton.on(
    'click',
    function () {
      Utils.save_value_to_params("editing", true);
      odkTables.openTableToListViewArbitraryQuery(
        null,
        'mortality',
        'SELECT * FROM mortality WHERE ' + query + ' ' + orderBy,
        selection_args,
        null);
    }
  );

  // for the list views we can set a filter on the DB query so we only get records matching the stand and plot if it is given
  let query = null, prev_query = null, orderBy = 'ORDER BY stand, tag, plot', selection_args = null;
  if (params) {
    query = 'stand=?';
    prev_query = 'StandID=?';                 // UNIFY THIS
    selection_args = [params.stand];
    if (params.type === Constants.PlotTypes.FIXED_RADIUS_PLOT) {
      query += ' AND plot=?';
      prev_query += ' AND Plot=?';            // PLEASE
      selection_args.push(params.plot);
    }
  }

  // links to Tables list views
  var remeasureListButton = $('#measure-list');
  remeasureListButton.on(
    'click',
    function () {
      Utils.save_value_to_params("editing", true);
      odkTables.openTableToListViewArbitraryQuery(
        null,
        'measure',
        'SELECT * FROM measure WHERE ' + query + ' ' + orderBy,
        selection_args,
        null);
    }
  );

  var herbsListButton = $('#herb-list');
  herbsListButton.on(
    'click',
    function () {
      Utils.save_value_to_params("editing", true);
      odkTables.openTableToListViewArbitraryQuery(
        null,
        'herbs',
        'SELECT * FROM herbs WHERE plot=? ORDER BY plot',
        [params.plot],
        null);
    }
  );

  var prevDataListButton = $('#prev-data-list');
  prevDataListButton.on(
    'click',
    function () {
      odkTables.openTableToSpreadsheetView(
        null,
        'prev_data',
        prev_query,
        selection_args);
    }
  );

var prevherbsDataListButton = $('#prev-herbs-list');
prevherbsDataListButton.on(
  'click',
  function () {
    odkTables.openTableToSpreadsheetView(
      null,
      'prev_herbs',
      'plot=? ORDER BY plot',
      [params.plot]);
  }
);

var prevplotDataListButton = $('#prev-plot-list');
prevplotDataListButton.on(
  'click',
  function () {
    odkTables.openTableToSpreadsheetView(
      null,
      'prev_standdoc',
      null,
      null);
  }
);

  var standDocListButton = $('#stand-doc-list');
  standDocListButton.on(
    'click',
    function () {
      Utils.save_value_to_params("editing", true);
      odkTables.openTableToListViewArbitraryQuery(
        null,
        'stand_doc',
        'SELECT * FROM stand_doc WHERE plot=? ORDER BY plot',
        [params.plot],
        null);
    }
  );

}
