
function bindRemeasureValidate() {
  // get current params, using params.status for setting required fields
  let params = JSON.parse(localStorage.getItem(Constants.LocalStorageKeys.SELECTION_PARAMS));

  if (params.form_def === "stand_doc") {
    return; // just bail if we're editing a stand doc
  } else if (params.form_def === "herbs") {
    setRequired_herbs(params);
  } else {
    setRequired_remeasure(params);
    htCheck_remeasure()
  }
}

function setRequired_remeasure(params){

  // 9 represents 'Not Found'
  if(Number(params.status) === 1){
      $('input#height_r').prop('required',true)
      $('input#species').prop('required',true)
      $('input#tag').prop('required',true)
      $('input#gx').prop('required',true)
      $('input#gy').prop('required',true)
      $('input#cell').prop('required',true)
    } else {
      $('input#height_r').prop('disabled', true)
    }
}

function setRequired_herbs(params){

      $('input#plot').prop('required',true)
      $('input#herb_species').prop('required',true)
      $('input#cover').prop('required',true)
      $('input#stemcount').prop('required',true)
      $('input#avgcell').prop('required',true)
}


function htCheck_remeasure(){

    let ht = $('input#ht_r')

    //getting previous value from database
    prevHtVal = 'NULL'
    let prevData = JSON.parse(localStorage.getItem(Constants.LocalStorageKeys.TREE_QUERY_RESULTS));
    $.each(prevData, (key,value) =>{
      if(key == 'ht')
        prevHtVal = value
    })

    ht.change(()=>{
      let htVal = Number(ht.val())
      console.log(htVal) // for testing
      //check if less than previous
      if(htVal < prevHtVal){
        $('#ht_check_op1_r').modal('show')
        $( "#yes_ht_op1_r" ).click(function() {
          $('#ht_check_op1_r').modal('hide')
        })
        $( "#no_ht_op1_r" ).click(function() {
          $('#ht_r').val(" ")
          $('#ht_check_op1_r').modal('hide')
        })
      }

      //check if greater by 50 mm since previous
      if(htVal > (prevHtVal + 50)){
        $('#ht_check_op2_r').modal('show')
        $( "#yes_ht_op2_r" ).click(function() {
          $('#ht_check_op2_r').modal('hide')
        })
        $( "#no_ht_op2_r" ).click(function() {
          $('#ht_r').val(" ")
          $('#ht_check_op2_r').modal('hide')
        })
      }
    })

}

function search_newTrees(params){

    let success = function(result){
      if(result.getCount() === 0){
        $('#from_check_r').modal('show')

        $( "#ok_from_check_r" ).click(function() {
          $('#from_tag_r').val(" ") // clear value
          $('#from_check_r').modal('hide')
        })

      } else{
        // alert("Tree Found in search_newTrees")
        console.log("succes")
      }
    }

    let failure = function(result){
      console.log("fromCheck_remeasure(): database look up failed")
      alert("fromCheck_remeasure(): database look up failed (search_newTrees)")
    }

    let query = `SELECT * FROM measure
                          WHERE measure.stand=?
                            AND measure.tag=?`;

   let bindParams = [params.stand, fromTag.val()]

   switch(params.type)
   {
     case Constants.PlotTypes.FIXED_RADIUS_PLOT:
        // value of 0 zero selected, only allowed for fixed radius plots
       if(fromTag.val().trim() === ""){
         return;
       }
       query += ` AND measure.plot=?`
       bindParams.push(params.plot)
       break;
     default:
      break;
   }

   odkData.arbitraryQuery('prev_data',query, bindParams, null, null, success, failure)
  }


function distanceCheck_remeasure(){


  let distance = $('input#distance_r')

  distance.change(()=>{
    let distanceVal = Number(distance.val())
    console.log("distanceVal " + distanceVal)

    if(distanceVal < 0.1 || distanceVal > 25.0){
      $('#distance_check_op1_r').modal('show')

      $( "#ok_distance_check_op1_r" ).click(function() {
        $('#distance_r').val(" ") // clear value
        $('#distance_check_op1_r').modal('hide')
      })
    } else if (distanceVal > 18){
    $('#distance_check_op2_r').modal('show')

    $( "#ok_distance_check_op2_r" ).click(function() {
      // $('#distance_r').val(" ") // clear value
      $('#distance_check_op2_r').modal('hide')
    })
    }
  })
}

function azimuthCheck_remeasure(){

  let azimuth = $('input#azimuth_r')


  azimuth.change(()=>{
      let azimuthVal = Number(azimuth.val())

      if(azimuthVal < 0 || azimuthVal > 360){
        $('#azimuth_check_r').modal('show')

        $( "#ok_azimuth_check_r" ).click(function() {
          $('#azimuth_r').val(" ") // clear value
          $('#azimuth_check_r').modal('hide')
        })
      }
  })
}
