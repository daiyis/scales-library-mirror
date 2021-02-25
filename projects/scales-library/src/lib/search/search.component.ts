import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() keywords = '';
  @Input() placeholderText = 'Search...';
  @Input() debounceTime = 300;
  @Output() search = new EventEmitter<string>();
  @Output() keywordsChange = new EventEmitter<string>();

  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  searchTextChanged$ = new Subject<string>();
  searchCancelled: boolean = false;

  ngOnInit() {
    this.searchTextChanged$
      .pipe(
        takeUntil(this.destroyed$),
        debounceTime(this.debounceTime),
        distinctUntilChanged()
      )
      .subscribe((searchText) => {
        if (!this.searchCancelled) {
          this.search.next(searchText);
        }
        this.searchCancelled = false;
      });
  }

  ngOnDestroy() {
    this.searchTextChanged$.complete();
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onSearch(event: any) {
    //enter key pressed, search immediately and cancels search in queue
    if (event.keyCode === 13 || !event.target.value) {
      this.search.next(event.target.value);
      this.searchCancelled = true;
    } else {
      this.searchTextChanged$.next(event.target.value);
    }
  }
}
