import { ForgotPassword } from './../pages/forgot-password/forgot-password';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Transfer} from '@ionic-native/transfer';
import { Geolocation } from '@ionic-native/geolocation';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

import { SMS } from '@ionic-native/sms';
import { Network } from '@ionic-native/network';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { CuacaPage } from '../pages/cuaca/cuaca';
import { PasangPage } from '../pages/pasang/pasang';
import { PengumumanPage } from '../pages/pengumuman/pengumuman';
import { TalianPage } from '../pages/talian/talian';
import { AduanPage } from '../pages/aduan/aduan';
import { AduanV2Page } from '../pages/aduan/aduan-v2';
import { SosPage } from '../pages/sos/sos';
import { TentangPage } from '../pages/tentang/tentang';
import { SosialPage } from '../pages/sosial/sosial';
import { AduanSendPage } from '../pages/aduan-send/aduan-send';
import { ContactPage } from '../pages/contact/contact';
import { FaqPage } from '../pages/faq/faq';
import { PrihatinSuccessPage } from '../pages/prihatin-success/prihatin-success';
import { PrihatinPage } from '../pages/prihatin/prihatin';
import { EmergencySendPagePage } from '../pages/emergency-send-page/emergency-send-page';
import { PengumumanService } from '../providers/pengumuman-service';
import { SDKBrowserModule } from './shared/sdk/index';
import { PengumumanDetailsPage } from '../pages/pengumuman-details/pengumuman-details';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { LocationTracker } from '../providers/location-tracker';
// Services
import { Connectivity } from '../providers/connectivity-service';
import { GoogleMaps } from '../providers/google-maps';
import * as moment from 'moment';



export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    HomePage,
    CuacaPage,
    PasangPage,
    PengumumanPage,
    TalianPage,
    AduanPage,
    AduanV2Page,
    SosPage,
    TentangPage,
    SosialPage,
    AduanSendPage,
    ContactPage,
    PengumumanDetailsPage,
    FaqPage,
    PrihatinPage,
    PrihatinSuccessPage,
    EmergencySendPagePage,
    ForgotPassword
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SDKBrowserModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    HomePage,
    CuacaPage,
    PasangPage,
    PengumumanPage,
    TalianPage,
    AduanPage,
    AduanV2Page,
    PrihatinSuccessPage,
    SosPage,
    TentangPage,
    SosialPage,
    AduanSendPage,
    ContactPage,
    PengumumanDetailsPage,
    FaqPage,
    PrihatinPage,
    EmergencySendPagePage,
    ForgotPassword
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LocationTracker, PengumumanService, GoogleMaps, Connectivity, Storage, File, SMS, Transfer, Geolocation, Network, FileTransfer, FileTransferObject, File,Camera]
})
export class AppModule {}


