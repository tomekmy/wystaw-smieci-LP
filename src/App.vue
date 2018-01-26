<template>
  <v-app light>
    <v-content>
      <section>
        <v-parallax class="top-parallax" src="static/img/app-green.webp" alt="Put out the garbage on green" height="600"></v-parallax>
      </section>
      
      <section>
        <v-layout
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 class="mt-3">
            <div class="text-xs-center">
              <h1 class="headline">GARBAGE COLLECTION SCHEDULE IN THE ZIELONKA TOWN</h1>
              <a href="https://play.google.com/store/apps/details?id=pl.example.android.garbageapp"><img class="mt-3" src="static/img/google-play-badge.png" alt="Get App" height="65"></a>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text">event</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Review of deadlines</div>
                    </v-card-title>
                    <v-card-text>
                      Always valid dates of garbage collection in Zielonka. With our application you can view dates of collection for all three zones.<br>
                      In the first place you will always find the nearest date.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text">alarm_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Notifications</div>
                    </v-card-title>
                    <v-card-text>
                      You will never forget about the putting out the garbage! Just select the notification option and the
                      application will remind you the day before about the need to put out the right garbage.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">User friendly</div>
                    </v-card-title>
                    <v-card-text>
                      All it takes is one click in the application to find out what is the next date of garbage collection. 
                      Only two clicks to set notifications for the correct zone.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="static/img/app-wood.webp" alt="Garbage collection on wood" height="380"></v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Authors</div>
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li>
                      <strong>Grzegorz Bielański</strong> – idea and application development for Android system.
                      <a class="mx-1" href="https://www.linkedin.com/in/gbielanski/">
                        <img class="list-img" src="static/img/linkedin-icon-blue.png" height="16" alt="LinkedIn Logo">
                      </a> 
                      <a href="https://github.com/gbielanski">
                        <img class="list-img" src="static/img/github-icon-black.png" height="16" alt="GitHub Logo">
                      </a>
                      </li>
                    <li>
                      <strong>Tomasz Milczarek</strong> – Android application development. 
                      <a class="mx-1" href="https://www.linkedin.com/in/milto/">
                        <img class="list-img" src="static/img/linkedin-icon-blue.png" height="16" alt="LinkedIn Logo">
                      </a> 
                      <a href="https://github.com/miltomasz">
                        <img class="list-img" src="static/img/github-icon-black.png" height="16" alt="GitHub Logo">
                      </a>
                    </li>
                    <li>
                      <a class="black--text black-link" href="https://mysliwiec.pro/">Tomasz Myśliwiec</a> – project web page. 
                      <a class="mx-1" href="https://www.linkedin.com/in/tomekmy/">
                        <img class="list-img" src="static/img/linkedin-icon-blue.png" height="16" alt="LinkedIn Logo">
                      </a>
                      <a href="https://github.com/tomekmy">
                        <img class="list-img" src="static/img/github-icon-black.png" height="16" alt="GitHub Logo">
                      </a>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact</div>
                </v-card-title>
                <v-card-text>
                  In case of any comments, please send a message to our Facebook profile.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <img src="static/img/facebook-icon.png" height="24" alt="Fan page">
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title><a href="https://www.facebook.com/ZielonkaWystawSmieci/">ZielonkaWystawSmieci</a></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="green">
        <a class="black--text black-link" href="https://mysliwiec.pro/">Tomasz Myśliwiec</a>&nbsp;<span class="white--text">&copy; 2017</span>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {};
  }
};
</script>