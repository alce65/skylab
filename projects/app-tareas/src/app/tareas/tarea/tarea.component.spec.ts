import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarea } from '../../models/tarea';

import { TareaComponent } from './tarea.component';

describe('TareaComponent', () => {
	let component: TareaComponent;
	let fixture: ComponentFixture<TareaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ TareaComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TareaComponent);
		component = fixture.componentInstance;
		component.tarea = new Tarea();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
