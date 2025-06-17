import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { TabManagerComponent } from '../tab-manager/tab-manager.component';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    TabManagerComponent,
    SideBarComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly authService: AuthService = inject(AuthService);
  private userService: UserService = inject(UserService);

  user: User | undefined = this.userService.get();

  token: string = this.authService.getToken();
  username: string = this.user?.username as string;
}
