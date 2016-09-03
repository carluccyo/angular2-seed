import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';
import {Github} from '../shared/github';

const STYLES = require('!raw!less!./repo-detail.less')

@Component({
  selector: 'repo-detail',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: [STYLES],
  template: require('to-string!./repo-detail.html')
})
export class RepoDetail implements OnInit {
  private org:string;
  private repo:string;
  public repoDetails:any = {};

  constructor(public github:Github, private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.org = this.router.routerState.parent(this.route).snapshot.params['org'];
      this.repo = params['repo'] || '';

      if (this.repo) {
        this.github.getRepoForOrg(this.org, this.repo)
          .subscribe(repoDetails => {
            this.repoDetails = repoDetails;
          });
      }
    });
  }
}
