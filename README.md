Ionic starter template that includes Facebook and Google open auth login through native facebook and google apps.

What is the advantage? For starters your users need not enter their user-id and password to login considering they
have the corresponding apps installed and logged in.

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
cordova -d plugin add ./phonegap-facebook-plugin-master/ --variable APP_ID="809387279194163" --variable APP_NAME="testApp"

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




