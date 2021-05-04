import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AppService, DemoCode } from '../app.service';

@Component({
  selector: 'app-sc-button-doc',
  templateUrl: './sc-button-doc.component.html',
  styleUrls: ['./sc-button-doc.component.scss'],
})
export class ScButtonDocComponent implements OnInit {
  copyLoading = false;
  codeLoaded = false;
  destroy$ = new Subject();
  @Input() componentName = '';
  @Input() description = '';

  highlightCode = '';

  constructor(private cdr: ChangeDetectorRef, private appService: AppService) {}

  ngOnInit(): void {
    this.getDemoCode().subscribe();
  }

  // copyCode(): void {
  //   setTimeout(() => {
  //     this.copyLoading = !this.codeLoaded;
  //     this.check();
  //   }, 120);
  //   this.getDemoCode().subscribe(data => {
  //     this.copyLoading = false;
  //     this.check();
  //     this.copy(data.rawCode).then(() => {
  //       this.copied = true;
  //       setTimeout(() => {
  //         this.copied = false;
  //         this.check();
  //       }, 1000);
  //     });
  //   });
  // }

  getDemoCode(): Observable<DemoCode> {
    return this.appService.getCode('components-button-demo-basic').pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        if (data) {
          this.highlightCode = data.highlightCode;
          this.codeLoaded = true;
          this.check();
        }
      })
    );
  }

  check(): void {
    this.cdr.markForCheck();
  }
}
