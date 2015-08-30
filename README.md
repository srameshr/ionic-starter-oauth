Ionic starter template that includes Facebook and Google open auth login through native facebook and google apps.

What is the advantage? For starters your users need not enter their user-id and password to login considering they
have the corresponding apps installed and logged in.

This starter template does everything for you. All you have to do is, install the plugins as mentioned below
and decide what to do with users data after they login. 

If you want to see a working demo of this, then install the ionic-outh.apk that is present in the demos folder

<h6>After cloning this repo: </h6>
<ul><li>Add platform IOS or Android. When done, follow the steps mentioned for facebook, google or both.</li>
<li>If you are using both google and facebook login, you will notice a jar file mismatch error when building.
To overcome this delete the jar file in the directory:</li>
 <pre>platforms/android/libs</pre>
<li>Also this repo makes use of Ionicons 2.0 and angular wrapper for googlePlus plugin which is not yet integrated into
the official ngCordova repo.</li></ul>

<h3>Facebook setup.</h3>

This repo uses wizcorps facebook login plugin for facebook auth.

<h5>Step 1: Goto https://www.developers.facebook.com </h5> 

![Alt text](./screenshots/facebook/1.png?raw=true "Goto developers.facebook.com")

<h5>Step 2: Hover on "MyApps" and click on "Create a new app" from the dropdown, and then select your platform (IOS or Android but not www) from the popover screen</h5>

![Alt text](./screenshots/facebook/2.png?raw=true "Platform")

<h5>Step 3: Once done, click on "Skip and create App id" in the top right corner and then enter your app name and optional app package identifer (example: com.mycompanyname.myappname)</h5>

![Alt text](./screenshots/facebook/3.png?raw=true "App name and optional package name")

<h5>Step 4: You will obtain your AppId and your App name. Copy both your app id and your name. You will need it while installing the plugin.</h5>

<p>P.S: I have deleted the above app. So dont try to use the same app id</p>

![Alt text](./screenshots/facebook/4.png?raw=true "ID and Name")

<h5>Step 5: Installing the plugin. Before installing make sure you have added a platform like IOS or Android and ANDROID_HOME is set in your path.</h5>
<h6>Goto: https://github.com/Wizcorp/phonegap-facebook-plugin and download the repo.</h6>
<h6>Extract it into your working directory or any other directory for that matter and install it using the command:</h6>
```
cordova -d plugin add /path/to/cloned/phonegap-facebook-plugin --variable APP_ID="123456789" --variable APP_NAME="myApplication"

```
<p>Note that you should replace the app id and app name as mentioned in step 4.</p>
<p> For example I would do:</p>
```
cordova -d plugin add ./phonegap-facebook-plugin-master/ --variable APP_ID="803657845698125" --variable APP_NAME="testApp"

```
<h5>Step 6: Once the plugin has been added you need to set up hash keys(Android) and make the app publicly available so that everybody can start using it or testing it. Go to your app setting and click on "Add a platform"</h5>

![Alt text](./screenshots/facebook/5.png?raw=true "Add platform")

<h5>Step 7: Fill out the details and if you are on Android you have to generate key hash using the command (if you dont have your app keystore set and your apk is not release ready):</h5>

```
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
```
and the password for the debug.keystore is ``` android ```

Then setup your email and make your app publicly available under status and review.

![Alt text](./screenshots/facebook/6.png?raw=true "Keytool")

<h5>Finally explore the graph api at: https://developers.facebook.com/tools/explorer/ </h5>

![Alt text](./screenshots/facebook/7.png?raw=true "Working!!!")



<h3>Google Setup</h3>

This repo uses EddyVerbruggen's Googleplus login plugin for google+ auth.

<h5>Step 1: Follow the instructions at: https://github.com/EddyVerbruggen/cordova-plugin-googleplus .</h5>
<h4>Note: While enabling the Google+ API, from the [Google Developers Console](https://console.developers.google.com) you will notice in step 6 which says
"copy and paste the below package name". Please dont do that. Use the package name that is defined in your config.xml file.
This is how your android app is verified without the API key. For example the package name for me was: </h4>

 ```
 com.ionicframework.ionicoauth302922
 ```
Available methods:
```
$cordovaGooglePlus.login()

$cordovaGooglePlus.silentLogin()

$cordovaGooglePlus.logout()

$cordovaGooglePlus.disconnect()
```


