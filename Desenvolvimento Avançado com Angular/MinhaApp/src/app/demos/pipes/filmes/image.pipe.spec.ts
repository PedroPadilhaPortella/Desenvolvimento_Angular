import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ImagePipe } from "./image.pipe";

describe('ImagePipe', () => {

    describe('Teste Isolado', () => {

        const pipe = new ImagePipe();

        it('deve criar o caminho da imagem a partir do nome, do path e sem substituir', () => {
            expect(pipe.transform("batman.png", 'default', false)).toBe('/assets/batman.png')
            expect(pipe.transform("batman.png", 'path', false)).toBe('/path/batman.png')
        });

        it('deve criar um caminho, mesmo sem string da imagem ou com o substituir == true', () => {
            expect(pipe.transform("batman.png", 'default', true)).toBe('/assets/batman.png')
            expect(pipe.transform('', 'default', false)).toBe('/assets/')
        })
        
        it('deve criar o caminho usando a imagem semCapa.jpg', () => {
            expect(pipe.transform('', 'default', true)).toBe('/assets/semCapa.jpg')
        });
    });
});