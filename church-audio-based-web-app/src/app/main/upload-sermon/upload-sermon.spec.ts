import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSermon } from './upload-sermon';

describe('UploadSermon', () => {
  let component: UploadSermon;
  let fixture: ComponentFixture<UploadSermon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSermon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSermon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
