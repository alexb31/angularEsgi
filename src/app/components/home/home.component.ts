import { Component, OnInit } from '@angular/core';
import {Launch} from '../../models/launch';
import { Observable } from 'rxjs';
import { SpacexApiService } from '../../services/spacex-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  launches: Launch[];
  tabOne = 'Tab One';
  tabTwo = 'Tab Two';
  tabOneContent = 'Hello';

  user = {
    name: 'toto',
    age: 2,
    email: 'tot@titi.fr'
  }


  constructor(
    private spacexApiService: SpacexApiService,
    private router: Router
    ) { }

  ngOnInit() {
    this.spacexApiService.getLaunches().subscribe(launches => {
      this.launches = launches;
    });

  }

  navigateToPage2() {
    this.router.navigate(['page2']);
  }

}
