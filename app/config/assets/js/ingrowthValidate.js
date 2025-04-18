//NOTE: possibly add range constraints in here as well
//      in order to keep consistency and allow for
//      a simpler/(more inuitive) modification experience for future users

// ALSO: CREATE Classes/Objects for functions in each validation file
$(document).ready(function() {
  bindIngrowthValidate();
});

function bindIngrowthValidate(){
 // set defaults when page is loaded
 statusDefault_ingrowth()
 setRequired_ingrowth()

 tagCheck_ingrowth()

 htCheck_ingrowth() //build

}

function htCheck_ingrowth(){

  let ht = $('input#ht_i')

  ht.change(()=>{
    let htVal = Number(ht.val())
    console.log(htVal) // for testing

    //check if greater than 10 cm
    if(htVal < 5){
      $('#ht_check_op1_i').modal('show')
      $( "#yes_ht_op1_i" ).click(function() {
        $('#ht_check_op1_i').modal('hide')
      })
      $( "#no_ht_op1_i" ).click(function() {
        $('#ht_i').val(" ")
        $('#ht_check_op1_i').modal('hide')
      })
    }

    //check if greater than 100 cm
    if(htVal > 100){
      $('#ht_check_op2_i').modal('show')
      $( "#yes_ht_op2_i" ).click(function() {
        $('#ht_check_op2_i').modal('hide')
      })
      $( "#no_ht_op2_i" ).click(function() {
        $('#ht_i').val(" ")
        $('#ht_check_op2_i').modal('hide')
      })
    }
  })

}

function statusDefault_ingrowth(){

  $('select#status_i option[value="2"]').attr("selected",true)

}

function setRequired_ingrowth(){

  $('input#plot').prop('required',true)
  $('input#tag').prop('required', true)
  $('select#species').prop('required',true)
  $('select#idQual').prop('required',true)
  $('input#ht').prop('required',true)
  $('input#gx').prop('required',true)
  $('input#gy').prop('required',true)
  $('input#cell').prop('required',true)

}


function tagCheck_ingrowth(){
  let tag = $('input#tag')

  tag.change(()=>{
    let params = JSON.parse(localStorage.getItem(Constants.LocalStorageKeys.SELECTION_PARAMS));

    let success = function(result) {
      if(result.getCount() > 0){ // usually 1, but can be more sometimes in special cases
        $('#tag_check_i').modal('show')

        $( "#ok_tag_i" ).click(function() {
          $('#tag').val(" ") // clear value
          $('#tag_check_i').modal('hide')
        })

      } else if (result.getCount() === 0){
        search_newTrees(params)
        // console.log("tree not found")
      } else {
        console.log("error")
      }
    }

    let failure = function(result){
      console.log("tagCheck_ingrowth(): database look up failed")
      alert("tagCheck_ingrowth(): database look up failed")
    }

    let query = `SELECT * FROM prev_data
                          WHERE prev_data.StandID=?
                            AND prev_data.tag=?`;

    let bindParams = [params.stand, tag.val()]

    switch(params.type)
    {
      case Constants.PlotTypes.FIXED_RADIUS_PLOT:
        query += ` AND prev_data.plot=?`
        bindParams.push(params.plot)
        break;
     default:
        break;
    }

    odkData.arbitraryQuery('prev_data',query, bindParams, null, null, success, failure)

  })

  function search_newTrees(params){

    let success = function(result){
      if(result.getCount() > 0){ // or !==
        $('#tag_check_i').modal('show')

        $( "#ok_tag_i" ).click(function() {
          $('#tag').val(" ") // clear value
          $('#tag_check_i').modal('hide')
        })

      } else if (result.getCount() === 0){
        console.log("tree not found")
        // success, we can continue
      } else {
        console.log("error")
      }
    }

    let failure = function(result){
      console.log("fromCheck_ingrowth(): database look up failed")
      alert("fromCheck_ingrowth(): database look up failed (search_newTrees)")
    }

    let query = `SELECT * FROM measure
                          WHERE measure.stand=?
                            AND measure.tag=?`;

   let bindParams = [params.stand, tag.val()]

   switch(params.type)
   {
     case Constants.PlotTypes.FIXED_RADIUS_PLOT:

       query += ` AND measure.plot=?`
       bindParams.push(params.plot)
       break;
     default:
      break;
   }

   odkData.arbitraryQuery('prev_data',query, bindParams, null, null, success, failure)
  }

}

function search_newTrees(params){

    let success = function(result){
      if(result.getCount() === 0){
        $('#from_check_i').modal('show')

        $( "#ok_from_check_i" ).click(function() {
          $('#from_tag_i').val(" ") // clear value
          $('#from_check_i').modal('hide')
        })

      } else{
        // alert("Tree Found in search_newTrees")
        console.log("succes")
      }
    }

    let failure = function(result){
      console.log("fromCheck_ingrowth(): database look up failed")
      alert("fromCheck_ingrowth(): database look up failed (search_newTrees)")
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

function distanceCheck_ingrowth(){

  let distance = $('input#distance_i')

  distance.change(()=>{
    let distanceVal = Number(distance.val())

    if(distanceVal < 0.1 || distanceVal > 25.0){
      $('#distance_check_op1_i').modal('show')

      $( "#ok_distance_check_op1_i" ).click(function() {
        $('#distance_i').val(" ") // clear value
        $('#distance_check_op1_i').modal('hide')
      })
    } else if (distanceVal > 18){
    $('#distance_check_op2_i').modal('show')

    $( "#ok_distance_check_op2_i" ).click(function() {
      // $('#distance_r').val(" ") // clear value
      $('#distance_check_op2_i').modal('hide')
    })
    }
  })
}

function azimuthCheck_ingrowth(){

  let azimuth = $('input#azimuth_i')

  azimuth.change(()=>{
      let azimuthVal = Number(azimuth.val())

      if(azimuthVal < 0 || azimuthVal > 360){
        $('#azimuth_check_i').modal('show')

        $( "#ok_azimuth_check_i" ).click(function() {
          $('#azimuth_i').val(" ") // clear value
          $('#azimuth_check_i').modal('hide')
        })
      }
  })
}
