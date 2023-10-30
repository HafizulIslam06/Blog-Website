import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsComponent } from './admin-posts.component';

describe('AdminPostsComponent', () => {
  let component: AdminPostsComponent;
  let fixture: ComponentFixture<AdminPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPostsComponent]
    });
    fixture = TestBed.createComponent(AdminPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
