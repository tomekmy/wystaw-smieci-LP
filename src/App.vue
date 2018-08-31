<template>
  <v-app light>
    <v-content>
      <section>
        <v-parallax class="top-parallax" src="/static/img/app-green.webp" alt="Wystaw śmieci on green" height="600"></v-parallax>
      </section>
      
      <section>
        <v-layout
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 class="my-3">
            <div class="text-xs-center">
              <h1 class="headline">HARMONOGRAM ODBIORU ODPADÓW W ZIELONCE</h1>
              <div class="mt-4 mb-3 subheading font-weight-medium text-xs-center">Wersja na system Android</div>
              <a href="https://play.google.com/store/apps/details?id=pl.example.android.garbageapp"><img src="/static/img/google-play-badge.png" alt="Pobierz aplikację" height="65"></a>
              <div class="mt-4 mb-3 subheading font-weight-medium text-xs-center">Przeglądarkowa wersja aplikacji</div>
              <a href="https://zielonka.wystaw-smieci.pl/"><img src="/static/img/pwa_logo_small.png" alt="PWA Logo" height="60px"></a>
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
                      <div class="headline text-xs-center">Przegląd terminów</div>
                    </v-card-title>
                    <v-card-text>
                      Zawsze aktualne terminy odbiorów odpadów w Zielonce. Dzięki naszej aplikacji możesz przeglądać daty
                      odbioru odpadów dla wszystkich trzech stref. <br />Na pierwszym miejscu znajdziesz zawsze najbliższy termin.
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
                      Już nigdy nie zapomnisz o wystawieniu śmieci! Wystarczy, że zaznaczysz opcję powiadomienia a 
                      aplikacja przypomni Ci dzień wcześniej o konieczności wystawienia właściwych odpadów.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Intuicyjna obsługa</div>
                    </v-card-title>
                    <v-card-text>
                      Wystarczy jedno kliknięcie w aplikacji aby dowiedzieć się jaki jest najbliższy termin odbioru odpadów. 
                      Tylko dwa kliknięcia aby ustawić powiadomienia dla właściwej strefy.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="/static/img/app-wood.webp" alt="Wystaw śmieci on wood" height="380"></v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Autorzy</div>
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li>
                      <strong>Grzegorz Bielański</strong> – pomysł i wykonanie aplikacji na system Android.
                      <a class="mx-1" href="https://www.linkedin.com/in/gbielanski/">
                        <img class="list-img" src="/static/img/linkedin-icon-blue.png" height="16" alt="LinkedIn Logo">
                      </a> 
                      <a href="https://github.com/gbielanski">
                        <img class="list-img" src="/static/img/github-icon-black.png" height="16" alt="GitHub Logo">
                      </a>
                      </li>
                    <li>
                      <strong>Tomasz Milczarek</strong> – aplikacja na system Android. 
                      <a class="mx-1" href="https://www.linkedin.com/in/milto/">
                        <img class="list-img" src="/static/img/linkedin-icon-blue.png" height="16" alt="LinkedIn Logo">
                      </a> 
                      <a href="https://github.com/miltomasz">
                        <img class="list-img" src="/static/img/github-icon-black.png" height="16" alt="GitHub Logo">
                      </a>
                    </li>
                    <li>
                      <a class="black--text black-link" href="https://mysliwiec.pro/">Tomasz Myśliwiec</a> – strona internetowa projektu. 
                      <a class="mx-1" href="https://www.linkedin.com/in/tomekmy/">
                        <img class="list-img" src="/static/img/linkedin-icon-blue.png" height="16" alt="LinkedIn Logo">
                      </a>
                      <a href="https://github.com/tomekmy">
                        <img class="list-img" src="/static/img/github-icon-black.png" height="16" alt="GitHub Logo">
                      </a>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Kontakt</div>
                </v-card-title>
                <v-card-text>
                  W razie jakichkolwiek uwag prosimy o wysyłanie wiadomości na nasz profil na Facebook'u.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
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