import { FileSizePipe } from './filesize.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('FileSizePipe', () => {
    describe('Teste Isolado', () => {

        const pipe = new FileSizePipe();

        it('deve converter bytes para megabytes', () => {
            expect(pipe.transform(123456789)).toBe('117.74MB')
            expect(pipe.transform(987654321)).toBe('941.90MB')
        });

        it('deve converter bytes para gigabytes', () => {
            expect(pipe.transform(1342177280)).toBe('1.25GB')

        });
    });

    describe('Teste comportamental do Pipe', () => {

        @Component({
            template: `Size: {{ size | filesize }}`
        })
        class TestComponent {
            size = 123456789
        }

        let component: TestComponent;
        let fixture: ComponentFixture<TestComponent>;
        let el: HTMLElement;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [
                    FileSizePipe,
                    TestComponent
                ]
            });

            fixture = TestBed.createComponent(TestComponent);
            component = fixture.componentInstance;
            el = fixture.nativeElement;
        });

        it('Deve converter bytes para MB', () => {
            fixture.detectChanges();
            expect(el.textContent).toContain('Size: 117.74MB');

            component.size = 1029281;
            fixture.detectChanges();
            expect(el.textContent).toContain('Size: 0.98MB');
        });

        it('Deve converter bytes para GB', () => {
            component.size = 1342177280;
            fixture.detectChanges();
            expect(el.textContent).toContain('Size: 1.25GB');
        });
    })
});