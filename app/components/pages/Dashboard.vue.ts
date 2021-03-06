import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { UserService } from '../../services/user';
import { Inject } from '../../util/injector';

@Component({})
export default class Dashboard extends Vue {
  @Inject() userService: UserService;

  get loggedIn() {
    return this.userService.isLoggedIn();
  }

  get dashboardUrl() {
    return this.userService.widgetUrl('dashboard');
  }
}
