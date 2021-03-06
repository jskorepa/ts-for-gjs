/**
 * cairo-1.0
 */

import * as Gjs from './Gjs'
export enum Content {
    COLOR,
    ALPHA,
    COLOR_ALPHA,
}
export function image_surface_create(): void
export interface Context {
}
export interface Context_Static {
    name: string
}
export declare var Context: Context_Static
export interface Surface {
}
export interface Surface_Static {
    name: string
}
export declare var Surface: Surface_Static
export interface Matrix {
}
export interface Matrix_Static {
    name: string
}
export declare var Matrix: Matrix_Static
export interface Pattern {
}
export interface Pattern_Static {
    name: string
}
export declare var Pattern: Pattern_Static
export interface Region {
}
export interface Region_Static {
    name: string
}
export declare var Region: Region_Static
export interface FontOptions {
}
export interface FontOptions_Static {
    name: string
}
export declare var FontOptions: FontOptions_Static
export interface FontType {
}
export interface FontType_Static {
    name: string
}
export declare var FontType: FontType_Static
export interface FontFace {
}
export interface FontFace_Static {
    name: string
}
export declare var FontFace: FontFace_Static
export interface ScaledFont {
}
export interface ScaledFont_Static {
    name: string
}
export declare var ScaledFont: ScaledFont_Static
export interface Path {
}
export interface Path_Static {
    name: string
}
export declare var Path: Path_Static
export interface RectangleInt {
    /* Fields of cairo.RectangleInt */
    x:number
    y:number
    width:number
    height:number
}
export interface RectangleInt_Static {
    name: string
}
export declare var RectangleInt: RectangleInt_Static