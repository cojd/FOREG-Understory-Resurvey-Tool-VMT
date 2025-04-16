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
**Connecting to and Running Docker Container**

----
**Dependencies for Working with Tablet Software on Windows/Mac**

The following are required to interact with and operate the tablets from a Windows/Mac computer.
1. [Java Run Time Environment](https://java.com/en/download/)
2. [Node.js](https://nodejs.org/en/)
3. [Grunt](https://gruntjs.com/getting-started)
4. [Android Studio ](https://developer.android.com/studio)
5. [Android Debug Bridge (ADB)](https://developer.android.com/studio/releases/platform-tools)

----
**Seeding Software Updates to New Tablets**

----
**Downloading and Installing Software on New Tablets**

Without a tablet set up to 'seed' the other tablets, a full install is required. This is a involved process and should not be attempted if another tablet already has the software intealled. 

----
**Updating Tablets Prior to Field Season**

Updating tablets prior to field season requires erasing all previous season's data and should only be done once backups have been saved. 

Updating is a five step process: 
1. Create new versions and replace old versions of data files: standdoc, prevdata, and prevherbs
2. Reset all tablets
3. Seed a single tablet to seed others with new data
4. Reset Docker server from seeding tablet
5. Download new database to all other tablets

**Step 1:** Create new versions and replace old versions of data files: standdoc, prevdata, and prevherbs

Located within 'app/assets/csv' will be 3 data files that need to be updated each field season, standdoc.csv, prevdata.csv, and prevherbs.csv. Make careful note of the structure and column names in each file to replicate in new version (column order, capitalization, and column definitions must match). Use the survey data from previous years to generate new versions and replace the old files. File names must match exactly (i.e., prevdata_2024.csv is not allowed).

**Step 2:** Reset all tablets

Each tablet will need to be reset, which is done by navigating to the internal storage of each tablet (files) and deleting the "opendatakit" folder. 

**Step 3:** Seed a single tablet to seed others with new data

Follow the steps above in **Seeding Software Updates to New Tablets** to place the updated software and database on a single tablet. 

**Step 4:** Reset Docker server from seeding tablet

From the seeding tablet used in Step 3, reset the Docker SQL databases. This can only be done from a tablet logged in to the server as "foregadmin" and with administrator priviliges within the ODK-X Tables app. Once logged in as admin (server settings within ODK-X Tables), navigate within the application to "Admin Access to Settings" (default password: 9999) to log in as an admin. Once logged in, extra options in the General Settings menuwill appear. Click on Server Settings and a button should appear in the bottom right hand corner with a prompt to reset the app server. Click this button and wait while the Docker server is reconfigured. 

_Note: In some cases, resetting the application server is unsucessful for unknown reasons. If this happens, follow the section_ **Using ODK-X Suitcase** _to reset the Docker server. Once reset from Suitcase, follow Step 4._

**Step 5:** Download new database to all other tablets

With the seeding tablet updated and all other tablets reset, connect each tablet to the server using "Server Settings" in the general settings of the ODK-X Tables app. Authentication over HTTP must be enabled, which is disabled by default and may reset between surveys. HTTP authentication can be re-enabled by logging in as admin (Admin Access to Settings, default password: 9999) and then navigating to "Manage ability to change Sever Settings". Make sure that "Allow unsafe/unsecured Authenticion" is enabled. We like to live on the edge. (from behind a VPN). Once enabled, log into the server from the ODK-X Tables application and click "Sync Now" to download new configuration. Repeat for each non seeding tablet application. 

----
**Setting up Docker Server on New Workstation**

Required dependencies: 
-	[Docker Desktop](https://www.docker.com/products/docker-desktop/) (Running with [Hyper-V](https://www.dell.com/support/manuals/en-us/dell-imageassist/dia_dynamic_ug/enable-hyper-v-manager-on-windows?guid=guid-80b4ffe0-6247-4a75-8b66-222bfd2cc50a&lang=en-us) virtualization – will NOT work with WSL2) _Note: most modern PCs running Windows 11+ run Hyper-V by default_
-	[Git](https://git-scm.com/downloads)
-	Java development kit ([JDK](https://www.oracle.com/java/technologies/downloads/))
-	[Apache Maven](https://maven.apache.org/)

Once dependencies are installed, make sure that Apache Maven is added to your workstation's PATH file. ([Guide](https://mkyong.com/maven/how-to-install-maven-in-windows/))

Before installing, make sure that the Docker engine is running in “[swarm mode](https://docs.docker.com/engine/swarm/)”. To activate “swarm mode” open a command prompt with admin privileges and type: docker swarm init

Step by step instructions for installation: https://docs.odk-x.org/sync-endpoint-manual-setup/
-	When running mvn clean install add -DskipTests to save 45 minutes of testing
-	Skip step 11, hostname is not required with default LDAP setup

To deploy server: docker stack deploy -c docker-compose.yml syncldap
-	After 30 seconds, the server should be online at 127.0.0.1 and visible on other machines within the same local network at the machine IP address

Navigate to 127.0.0.1:40000 to log in to LDAP users & groups setup
-	Default admin username: cn=admin,dc=example,dc=org
-	Default admin password: admin

Follow instructions to set users and groups: https://docs.odk-x.org/sync-endpoint-user-instructions/

----
**Launching and Closing Docker Server**

In command prompt, type to open server: docker stack deploy -c docker-compose.yml syncldap

_Note: Docker desktop UI does not need to remain open for the server to run_

In command prompt, type to close server: docker stack rm syncldap

----
**Tips on Troublsehooting**

By default, the ODK-X application stores logs on the Android device which can be found in /XXX/XXX/XXX. The error codes and timing are often difficult to understand, especially without experience in Javascript. It is often easier to debug using the _logcat_ interface of Android Studio (Downloadable [here](https://developer.android.com/studio)). Plug the tablet into a computer running Android Studio and follow the [logcat documentation](https://developer.android.com/studio/debug/logcat) to get started. Debug by using the tablet and tracing errors on the logcat window filtered to "ODK" to remove system logs. 
