import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ContadorComponent } from "./contador.component"

describe('Contador Component', () => {

    let component: ContadorComponent;
    let fixture: ComponentFixture<ContadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContadorComponent
            ]
        });

        fixture = TestBed.createComponent(ContadorComponent);
        component = fixture.componentInstance;

        component.valor = 0;
    });
    
    it("deve incrementar corretamente", () => {
        component.incrementar()
        expect(component.valor).toBe(1)
    });

    it("deve decrementar corretamente", () => {
        component.decrementar()
        expect(component.valor).toBe(0)
    });
    
    it('não deve decrementar abaixo do valor minimo', () => {
        component.incrementar()
        expect(component.valor).toBe(1);
        component.decrementar()
        expect(component.valor).toBe(0);
        component.decrementar()
        expect(component.valor).toBe(0);
    });

    it('não deve incrementar acima do valor máximo', () => {
        for(let i = 0; i < 200; i++) {
            component.incrementar()
        }

        expect(component.valor).toBe(100);
    });
})