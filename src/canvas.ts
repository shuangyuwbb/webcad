export abstract class Canvas {
    abstract get width(): number;
    abstract get height(): number;
    abstract get context(): CanvasRenderingContext2D;
    abstract clear(): void;
    abstract draw(x: number, y: number, width: number, height: number): void;
}