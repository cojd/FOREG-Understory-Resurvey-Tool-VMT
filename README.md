**Forests of Oregon Elevational Gradient (FOREG) Understory Resurvey Tool (VMT)**

This ODK-X Application is designed to run on Android tablets and is specialized to the understory plant resurvey protocols at the Andrews Forest. Application developed by Cole Doolittle based on the 'MAPP' software first developed by Sergei Poliakov & Joseph Landreville in coordination with Rob Pabst at Oregon State University. 

----
**Application Architecture:**
  
The primary code for this application is contained within the 'app/config' folder. All other application components are structural to ODK-X applications or are used in generic ODK-X example applications. The 'app/config' folder can be transplanted into a fresh ODK-X application (downloadable [here](https://docs.odk-x.org/app-designer-intro/)), although this should be unecessary (described in detail in _"Downloading and Installing Software on New Tablets"_). This section describes the application architecture within the 'app/config' folder. Not every file is highlighted, only those necessary to understanding, operating, and troubleshooting the application. For additional information, please refer to the ODK-X documentation ([here](https://docs.odk-x.org/)) and the MAPP repository ([here](https://github.com/RobPabst/MAPP)).

| File location        | Description                                                                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| assets/FormDefs.js   | The primary .js script containing the application structure. This file modifies underlying .json files in the tables folder to streamline software updates. |
| assets/StaticData.js | Defines all constants including species names, id levels, pre-defined comments, etc.                                                                        |
| assets/tables.init   | Paths to all data files to be loaded into application                                                                                                       |
| assets/csv           | Folder with formatted data from previous survey year (see “Formatting survey data for upload”)                                                              |
| assets/js            | Folder with .js scripts that control the interactions, form validation, and output generation. Should be modified with care and careful checking.           |
| tables               | The ‘tables’ folder contains the ODK-X designs for each individual form as well as definitions for how the application should read past years data forms.   |

----
Connecting to and Running Docker Container 




----
Downloading and Installing Software on New Tablets




----
Updating Tablets Prior to Field Season




----
**Tips on Troublsehooting**

By default, the ODK-X application stores logs on the Android device which can be found in /XXX/XXX/XXX. The error codes and timing are often difficult to understand, especially without experience in Javascript. It is often easier to debug using the _logcat_ interface of Android Studio (Downloadable [here](https://developer.android.com/studio?gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjws-S-BhD2ARIsALssG0bF5EcQoccimZHGXTeyvRi-UQ4OVuVTcZZkRqRUyRphM1Uve09Y2zQaAoWjEALw_wcB)). Plug the tablet into a computer running Android Studio and follow the [logcat documentation](https://developer.android.com/studio/debug/logcat) to get started. Debug by using the tablet and tracing errors on the logcat window filtered to "ODK" to remove system logs. 
