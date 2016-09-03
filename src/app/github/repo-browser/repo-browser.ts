import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Github } from '../shared/github';

const STYLES = require('!raw!less!./repo-browser.less');

@Component({
  selector: 'repo-browser',
  providers: [ Github ],
  template: require('to-string!./repo-browser.html'),
  styleUrls: [STYLES]
})
export class RepoBrowser {

  constructor(private router: Router, private github: Github) {}

  searchForOrg(orgName: string) {
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['/github', orgName]);
      });
  }

}
