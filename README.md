**Forests of Oregon Elevational Gradient (FOREG) Understory Resurvey Tool (VMT)**

This ODK-X Application is designed to run on Android tablets and is specialized to the understory plant resurvey protocols at the Andrews Forest. Application developed by Cole Doolittle based on the 'MAPP' software first developed by Sergei Poliakov & Joseph Landreville in coordination with Rob Pabst at Oregon State University. 

----
**Application Architecture:**
  
The primary code for this application is contained within the 'app/config' folder. All other application components are structural to ODK-X applications or are used in generic ODK-X example applications. The 'app/config' folder can be transplanted into a fresh ODK-X application (downloadable [here](https://docs.odk-x.org/app-designer-intro/)), although this should be unecessary (described in detail in _"Downloading and Installing Software on New Tablets"_). This section describes the application architecture within the 'app/config' folder. Not every file is highlighted, only those necessary to understanding, operating, and troubleshooting the application.

**assets**
commonDefinitions.js
StaticData.js
FormDefs.js
tables.init
csv
prev_data.csv
prev_herbs.csv
prev_standdoc.csv
js <- picker, validation, list filling, form creation

**tables**
herbs
measure
mortality
prev_data
prev_herbs
prev_standdoc
stand_doc

----
Connecting to and Running Docker Container 




----
Downloading and Installing Software on New Tablets




----
Updating Tablets Prior to Field Season




----
Tips on Troubleshooting




