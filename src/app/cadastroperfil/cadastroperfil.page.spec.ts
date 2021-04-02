import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroperfilPage } from './cadastroperfil.page';

describe('CadastroperfilPage', () => {
  let component: CadastroperfilPage;
  let fixture: ComponentFixture<CadastroperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
