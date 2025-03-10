const FORM_DEFS = {
  /**
   * REMEASURE FORM
   */
  remeasure: {
    table: 'measure',
    header: 'Seedling Remeasurement Form',
    cards: [
      {
        id: 'tree-info',
        header: 'Tree info',
        sections: [
          {
            inputs: [
              {
                column_name: "id",
                label: "Seedling ID",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                readonly: true,
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "tag",
                label: "Tag",
                html_element: "input",
                readonly: false,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: 'species',
                label: "Species",
                html_element: 'select',
                readonly: false,
                default_option: 'Please select a species...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'SpeciesList',
                },
              },
              {
                column_name: 'idQual',
                label: "ID Quality",
                html_element: 'select',
                readonly: false,
                default_option: 'Please select a quality...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'QualityList',
                },
              },

              {
                id: 'prev_status',
                column_name: 'status',
                label: "Previous status",
                html_element: 'select',
                disabled: true,
                default_option: 'No previous value...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'StatusList',
                },
              },
              {
                column_name: 'comments',
                label: "Previous comments",
                disabled: true,
                html_element: "textarea",
                html_attributes: { rows: 3 },
                data_attributes: { prev_action: 'replace' },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'details',
        header: 'Remeasurement data',
        sections: [
          {
            inputs: [
              {
                id: 'ht_r',
                column_name: 'ht',
                label: 'Height (mm)',
                html_element: 'input',
                html_attributes: { type: 'number', step: '1' },
                data_attributes: { prev_action: 'prepend' },
              },
{
                // modal option1 (if htVal < prevHtVal)
                modal: true,
                modal_id: 'ht_check_op1_r',
                label_id: 'ht_check_op1_Label_r',
                title: 'Height Check',
                text: 'Height is less than previous - is that correct? If so, note suspected reason for height decrease in comments (e.g., leader dieback)',
                buttons: [
                  {
                    id: 'yes_ht_op1_r',
                    text: 'Yes',
                    context_class: 'primary',
                  },
                  {
                    id: 'no_ht_op1_r',
                    text: 'No',
                    context_class: 'danger',
                  },
                ],
                // raw_html: '<!-- modal option1 (if dbhVal < 5) --> <div class="modal fade" id="dbh_check_op1_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="dbh_check_op1_Label_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="dbh_check_op1_Label_r">DBH Check</h5> </div> <div class="modal-body"> <p>Dbh is less than previous - is that correct?</p> <button type="button" id="yes_dbh_op1_r" class="btn btn-primary">Yes</button> <button type="button" id="no_dbh_op1_r" class="btn btn-danger">No</button> </div> </div> </div> </div>'
              },
              {
                // modal option2(if dbhVal > 10)
                modal: true,
                modal_id: 'ht_check_op2_r',
                label_id: 'ht_check_op2_Label_r',
                title: 'Height Check',
                text: 'Height increased > 50 mm - is that correct? If so, note suspected reason for height increase in comments (e.g., in a gap)',
                buttons: [
                  {
                    id: 'yes_ht_op2_r',
                    text: 'Yes',
                    context_class: 'primary',
                  },
                  {
                    id: 'no_ht_op2_r',
                    text: 'No',
                    context_class: 'danger',
                  },
                ],
                // raw_html: '<!-- modal option2(if dbhVal > 10) --> <div class="modal fade" id="dbh_check_op2_r" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="dbh_check_op2_Label_r" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="dbh_check_op2_Label_r">DBH Check</h5> </div> <div class="modal-body"> <p>Dbh increased > 5 cm - is that correct?</p> <button type="button" id="yes_dbh_op2_r" class="btn btn-primary">Yes</button> <button type="button" id="no_dbh_op2_r" class="btn btn-danger">No</button> </div> </div> </div> </div>'
              },

            ], // inputs
          },
        ], // sections
      },
      {
        id: 'mapping',
        header: 'Mapping',
        collapsable: false,
        collapsed: false,
        sections: [
          {
            inputs: [
            {
             id: 'gx',
             column_name: 'gx',
             label: 'X-Coordinate (cm)',
             html_element: 'input',
             html_attributes: { type: 'number',
              step: 1,
              min: 0,
              max: 100, },
              data_attributes: { prev_action: 'replace' },
              },
              {
                id: 'gy',
                column_name: 'gy',
                label: 'Y-Coordinate (cm)',
                html_element: 'input',
                html_attributes: { type: 'number',
                 step: 1,
                 min: 0,
                 max: 100,},
              data_attributes: { prev_action: 'replace' },
              },
              {
                               column_name: "cell",
                               label: "Cell",
                               html_element: "input",
                               readonly: false,
                               html_attributes: { type: 'string' },
                               data_attributes: { prev_action: 'replace' },
                            },
            ],// inputs
          },
        ],// sections
      },
        {
                  id: 'comments',
                  header: 'Comments',
                  sections: [
                    {
                      inputs: [
                        {
                          column_name: 'comment_1',
                          label: 'Comment 1',
                          html_element: 'select',
                          data_attributes: { options_list: 'CommentList' },
                        },
                        {
                          column_name: 'comment_2',
                          label: 'Comment 2',
                          html_element: 'select',
                          data_attributes: { options_list: 'CommentList' },
                        },
                        {
                          column_name: 'comment_3',
                          label: 'Comment 3',
                          html_element: 'select',
                          data_attributes: { options_list: 'CommentList' },
                        },
                        {
                          column_name: 'comment_custom',
                          label: 'Custom comment',
                          html_element: 'textarea',
                          html_attributes: { rows: 3 },
                        },
                      ], // inputs
                    },
                  ], // sections
                },
              ], // cards
            },


/**
 * MORTALITY FORM
 */

mortality: {
    table: 'mortality',
    header: 'Seedling Mortality Form',
    cards: [
      {
        id: 'tree-info',
        header: 'Seedling info',
        sections: [
          {
            inputs: [
              {
                column_name: "id",
                label: "Seedling ID",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                readonly: true,
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "tag",
                label: "Tag",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: 'species',
                label: "Species",
                html_element: 'select',
                readonly: true,
                default_option: 'Please select a species...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'SpeciesList',
                },
              },
              {
                column_name: 'idQual',
                label: "ID Quality",
                html_element: 'select',
                readonly: true,
                default_option: 'Please select a quality...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'QualityList',
                },
              },
              {
                id: 'prev_status',
                column_name: 'status',
                label: "Previous status",
                html_element: 'select',
                disabled: true,
                default_option: 'No previous value...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'StatusList',
                },
              },
              {
                column_name: 'status',
                label: "Current Status",
                html_element: 'select',
                readonly: true,
                default_option: 'Failed to load status...',
                data_attributes: {
                  prev_action: 'replace',
                  options_list: 'StatusList',
                },
              },
              {
                column_name: "cell",
                label: "Cell",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                              column_name: 'gx',
                              label: 'X-Coordinate (cm)',
                              html_element: 'input',
                              readonly: true,
                              html_attributes: { type: 'number',
                               step: 1,
                               min: 0,
                               max: 100,
                               },
              data_attributes: { prev_action: 'replace' },
              },
             {
                column_name: 'gy',
                label: 'Y-Coordinate (cm)',
                html_element: 'input',
                readonly: true,
                html_attributes: { type: 'number',
                 step: 1,
                 min: 0,
                 max: 100,
                 },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: 'comments',
                label: "Previous comments",
                disabled: true,
                html_element: "textarea",
                html_attributes: { rows: 3 },
                data_attributes: { prev_action: 'replace' },
              },
            ], // inputs
          },
        ], // sections
      },
      {
             id: 'comments',
             header: 'Comments',
             sections: [
               {
                 inputs: [
                   {
                     column_name: 'comment_1',
                     label: 'Comment 1',
                     html_element: 'select',
                     data_attributes: { options_list: 'CommentList' },
                   },
                   {
                     column_name: 'comment_2',
                     label: 'Comment 2',
                     html_element: 'select',
                     data_attributes: { options_list: 'CommentList' },
                   },
                   {
                     column_name: 'comment_3',
                     label: 'Comment 3',
                     html_element: 'select',
                     data_attributes: { options_list: 'CommentList' },
                   },
                   {
                     column_name: 'comment_custom',
                     label: 'Custom comment',
                     html_element: 'textarea',
                     html_attributes: { rows: 3 },
                   },
                 ], // inputs
               },
             ], // sections
           },
         ], // cards
       },

  /**
   * INGROWTH FORM
   */
  ingrowth: {
    table: 'measure',
    header: 'Ingrowth form',
    cards: [
      {
        id: 'tree-info',
        header: 'Tree info',
        sections: [
          {
            inputs: [
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                readonly: true,
                html_attributes: { type: 'number' },
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "tag",
                label: "Tag",
                html_element: "input",
                data_attributes: { prev_action: 'replace' },
              },
              {
                // Tag check
                modal: true,
                modal_id: 'tag_check_i',
                label_id: 'tag_Label_i',
                title: 'Tag Check',
                text: 'Tree already recorded.',
                buttons: [
                  {
                    id: 'ok_tag_i',
                    text: 'Ok',
                    context_class: 'primary',
                  },
                ],
              },
                            {
                              id: 'status_i',
                              column_name: 'status',
                              label: "Status",
                              html_element: 'select',
                              data_attributes: { options_list: 'StatusList' },
                            },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'details',
        header: 'Details',
        sections: [
          {
            inputs: [
              {
                id: 'species',
                column_name: 'species',
                label: "Species",
                html_element: 'select',
                default_option: 'Please select a species...',
                data_attributes: {
                  options_list: 'SpeciesList',
                },
              },
              {
                id: 'idQual',
                column_name: 'idQual',
                label: "ID Quality",
                html_element: 'select',
                default_option: 'Please select a quality...',
                data_attributes: {
                  options_list: 'QualityList',
                },
              },
              {
                id: 'ht_i',
                column_name: 'ht',
                label: 'Height (mm)',
                html_element: 'input',
                html_attributes: { type: 'number', step: '1' },
              },
                {
                              // modal option1(if dbhVal < 5)
                              modal: true,
                              modal_id: 'ht_check_op1_i',
                              label_id: 'ht_check_op1_Label_i',
                              title: 'Height Check',
                              text: 'Height is < 5 cm - is that correct?',
                              buttons: [
                                {
                                  id: 'yes_ht_op1_i',
                                  text: 'Yes',
                                  context_class: 'primary',
                                },
                                {
                                  id: 'no_ht_op1_i',
                                  text: 'No',
                                  context_class: 'danger',
                                },
                              ],
                              // raw_html: '<!-- modal option1(if dbhVal < 5) --> <div class="modal fade" id="dbh_check_op1_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="dbh_check_op1_Label_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="dbh_check_op1_Label_i">DBH Check</h5> </div> <div class="modal-body"> <p>Dbh is < 5 cm - is that correct?</p> <button type="button" id="yes_dbh_op1_i" class="btn btn-primary">Yes</button> <button type="button" id="no_dbh_op1_i" class="btn btn-danger">No</button> </div> </div> </div> </div>'
                            },
                            {
                              // modal option2(if dbhVal > 1000)
                              modal: true,
                              modal_id: 'ht_check_op2_i',
                              label_id: 'ht_check_op2_Label_i',
                              title: 'Height Check',
                              text: 'Height > 100 cm - is that correct?',
                              buttons: [
                                {
                                  id: 'yes_ht_op2_i',
                                  text: 'Yes',
                                  context_class: 'primary',
                                },
                                {
                                  id: 'no_ht_op2_i',
                                  text: 'No',
                                  context_class: 'danger',
                                },
                              ],
                              // raw_html: '<!-- modal option2(if dbhVal > 10) --> <div class="modal fade" id="dbh_check_op2_i" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="dbh_check_op2_Label_i" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="dbh_check_op2_Label_i">DBH Check</h5> </div> <div class="modal-body"> <p>Dbh > 10 cm - is that correct?</p> <button type="button" id="yes_dbh_op2_i" class="btn btn-primary">Yes</button> <button type="button" id="no_dbh_op2_i" class="btn btn-danger">No</button> </div> </div> </div> </div>'
                            },

            ], // inputs
          },
        ], // sections
      },
      {
        id: 'mapping',
        header: 'Mapping',
        collapsable: false,
        sections: [
          {
            inputs: [
              {
                id: 'gx',
                column_name: 'gx',
                label: 'X-Coordinate (cm)',
                html_element: 'input',
                html_attributes: { type: 'number',
                 step: 1,
                 min: 0,
                 max: 100,},
              },
              {
                id: 'gy',
                column_name: 'gy',
                label: 'Y-Coordinate (cm)',
                html_element: 'input',
                html_attributes: { type: 'number' },
              },
               {
                                column_name: "cell",
                                label: "Cell",
                                html_element: "input",
                                readonly: false,
                                html_attributes: { type: 'string' },

                             },
            ],// inputs
         },
       ],// sections
      },
    {
              id: 'comments',
              header: 'Comments',
              sections: [
                {
                  inputs: [
                    {
                      column_name: 'comment_1',
                      label: 'Comment 1',
                      html_element: 'select',
                      data_attributes: { options_list: 'CommentList' },
                    },
                    {
                      column_name: 'comment_2',
                      label: 'Comment 2',
                      html_element: 'select',
                      data_attributes: { options_list: 'CommentList' },
                    },
                    {
                      column_name: 'comment_3',
                      label: 'Comment 3',
                      html_element: 'select',
                      data_attributes: { options_list: 'CommentList' },
                    },
                    {
                      column_name: 'comment_custom',
                      label: 'Custom comment',
                      html_element: 'textarea',
                      html_attributes: { rows: 3 },
                    },
                  ], // inputs
                },
              ], // sections
            },
          ], // cards
        },

  /**
   * STAND DOC FORM
   */
  stand_doc: {
    table: "stand_doc",
    header: "Plot Metadata Form",
    cards: [
      {
        id: "stand_info",
        header: "Stand Info.",
        collapsable: false,
        collapsed: null,
        sections: [
          {
            inputs: [
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                data_attributes: { prev_action: 'replace' },
                readonly: true,
              },
              {
                column_name: "date",
                label: "Date (MMDDYYYY)",
                html_element: "input",
                html_attributes: { type: 'string' },
              },
              {
                column_name: "da_tag",
                label: "Dominant adult tag",
                html_element: "input",
                data_attributes: { prev_action: 'replace' },
                html_attributes: { type: 'string' },
              },
              {
                column_name: "da_species",
                label: "Dominant adult species",
                html_element: 'input',
                data_attributes: { prev_action: 'replace' },
                html_attributes: { type: 'string' },
              },
              {
                column_name: "da_dbh",
                label: "Dominant adult DBH (cm)",
                html_element: "input",
                html_attributes: { type: 'number', step: '0.1' },
                data_attributes: { prev_action: 'prepend' },
              },
              {
                column_name: "empty_cells",
                label: "Empty cells",
                html_element: "input",
                html_attributes: { type: 'number',
                                               step: 1,
                                               min: 0,
                                               max: 100,
                                               },
                data_attributes: { prev_action: 'prepend' },
              },
              {
              column_name: "percent_cover",
                  label: "Plant cover (%)",
                  html_element: "input",
                  html_attributes: { type: 'number', step: '0.1' },
                  data_attributes: { prev_action: 'prepend' },
              },
              {
              column_name: "percent_moss",
                                 label: "Moss cover (%)",
                                html_element: "input",
                                 html_attributes: { type: 'number', step: '0.1' },
              data_attributes: { prev_action: 'prepend' },
               },
               {
               column_name: "densiometer",
                 label: "Densiometer Reading (% Canopy Cover)",
                 html_element: "input",
                 html_attributes: { type: 'number',
                 step: 1,
                 min: 0,
                 max: 100,
              },
              },
              {
              column_name: "personnel",
              label: "Personnel (initials)",
              html_element: "input",
              html_attributes: { type: 'string' },
                            },
                            {
              column_name: "notes",
                            label: "Notes",
                            html_element: "input",
                            html_attributes: { type: 'string' },
                             },


            ], // inputs
          },
        ], // sections
      },
    ], // cards
  },

  /**
   * HERB FORM
   */
  herbs: {
    table: 'herbs',
    header: 'Herbaceous Resurvey Form',
    cards: [
      {
        id: 'tree-info',
        header: 'Tree info',
        sections: [
          {
            inputs: [
              {
                column_name: "stand",
                label: "Stand",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "plot",
                label: "Plot",
                html_element: "input",
                readonly: true,
                data_attributes: { prev_action: 'replace' },
              },
              {
                column_name: "herb_species",
                label: "Herb Species",
                html_element: 'select',
                default_option: 'Please select a species...',
                data_attributes: {
                options_list: 'HerbSpeciesList', },
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'details',
        header: 'Details',
        sections: [
          {
            inputs: [
              {
                id: 'stemcount',
                column_name: 'stemcount',
                label: 'Stem Count',
                html_element: 'input',
                html_attributes: { type: 'number',
                 step: 1,
                 min: 0,
                 max: 100,},
              },
              {
                id: 'cover',
                column_name: 'cover',
                label: "Cover (cells)",
                html_element: 'input',
                html_attributes: { type: 'number',
                 step: 1,
                 min: 0,
                 max: 100,},
              },
            ], // inputs
          },
        ], // sections
      },
      {
        id: 'mapping',
        header: 'Mapping',
        collapsable: false,
        sections: [
          {
            inputs: [

               {
                                column_name: "avgcell",
                                label: "Average Cell",
                                html_element: "input",
                                readonly: false,
                                html_attributes: { type: 'string' },

                             },
            ],// inputs
         },
       ],// sections
      },
    {
                 id: 'comments',
                 header: 'Comments',
                 sections: [
                   {
                     inputs: [
                       {
                         column_name: 'comment_1',
                         label: 'Comment 1',
                         html_element: 'select',
                         data_attributes: { options_list: 'CommentList' },
                       },
                       {
                         column_name: 'comment_2',
                         label: 'Comment 2',
                         html_element: 'select',
                         data_attributes: { options_list: 'CommentList' },
                       },
                       {
                         column_name: 'comment_3',
                         label: 'Comment 3',
                         html_element: 'select',
                         data_attributes: { options_list: 'CommentList' },
                       },
                       {
                         column_name: 'comment_custom',
                         label: 'Custom comment',
                         html_element: 'textarea',
                         html_attributes: { rows: 3 },
                       },
                     ], // inputs
                   },
                 ], // sections
               },
             ], // cards
           },

};

Object.freeze(FORM_DEFS);

const FormTemplates = {
  modal: function (modal_obj) {
    let mdl = $(`
      <div class="modal fade" id="${modal_obj.modal_id}" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="${modal_obj.label_id}" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${modal_obj.label_id}">${modal_obj.title}</h5>
            </div>
            <div class="modal-body">
              <p>${modal_obj.text}</p>
            </div>
          </div>
        </div>
      </div>
    `);

    let body = mdl.find('.modal-body');
    for (let i = 0; i < modal_obj.buttons.length; i++)
    {
      let btn = modal_obj.buttons[i]
      body.append(`<button type="button" id="${btn.id}" class="btn btn-${btn.context_class}">${btn.text}</button>`)
    }

    return mdl;
  },
}

