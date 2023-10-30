import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPostComponent } from './admin-add-post.component';

describe('AdminAddPostComponent', () => {
  let component: AdminAddPostComponent;
  let fixture: ComponentFixture<AdminAddPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddPostComponent]
    });
    fixture = TestBed.createComponent(AdminAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
