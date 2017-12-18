<template>
  <v-app light>
    <v-content>
      <section>
        <v-parallax src="/static/img/app-green.webp" alt="Wystaw śmieci on green" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="/static/img/wystaw-smieci-logo.png" alt="Wystaw śmieci logo" height="200">
            <h1 class="mb-2 display-1 text-xs-center text-shadow-1">Wystaw śmieci</h1>
            <!-- <div class="subheading mb-3 text-xs-center text-shadow-1">Już nigdy o tym nie zapomnisz</div> -->
            <a href="#" class="ma-3"><img src="/static/img/google-play-badge.png" alt="Pobierz aplikację" height="65"></a>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Podstawowe funkcje aplikacji Wystaw śmieci</h2>
              <!-- <span class="subheading">Podstawowe funkcje aplikacji</span> -->
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Nowoczesny wygląd</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text">alarm_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Powiadomienia</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text">event</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Przegląd terminów</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="/static/img/app-wood.webp" alt="Wystaw śmieci on wood" height="380">
          <v-layout column align-center justify-center>
            <!-- <div class="headline yellow--text text--accent-3 mb-3 text-xs-center text-shadow-1">Nie daj się rano zaskoczyć i pobierz naszą aplikację już dziś!</div> -->
            <a href="#" class="ma-2"><img src="/static/img/google-play-badge.png" alt="Pobierz aplikację" height="65"></a>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">O autorach</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Kontakt</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title><a href="kontakt@wystaw-smieci.pl">kontakt@wystaw-smieci.pl</a></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <!-- <v-icon class="blue--text text--lighten-2">message</v-icon> -->
                      <img src="/static/img/facebook-icon.png" height="24" alt="Fan page">
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
        <span class="white--text">&copy; 2017</span>
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