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
