import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubapiService } from 'src/app/services/githubapi/githubapi.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent {
  githubAvatarUrl: String;
  githubProfile = "AlvBarros";
  name = "Álvaro de Carvalho";
  title = "Software Engineer";

  constructor(_client: HttpClient) {
    const githubApiService = new GithubapiService(_client);
    githubApiService.getAvatarUrl(this.githubProfile)
      .subscribe((data: Object) => {
        this.githubAvatarUrl = data["avatar_url"];
      });
  }
}
